import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Markdown from '@/components/Markdown';
import InfiniteScroll from 'react-infinite-scroller';
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@/lib/session';
import { useScrollToView } from '@/hooks/useScrollToView';
import { User } from '@/pages/api/user';
import { InferGetServerSidePropsType } from 'next';
import { Grid, Paper, InputBase, Button, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { green, pink } from '@mui/material/colors';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import style from './index.module.scss';
import { Box} from '@mui/system';
import useLoginModal from "@/hooks/useLoginModal";
import toast, { Toaster } from "react-hot-toast";
interface IndexProps {
  user: User
}
export default function Index({
  user
}: IndexProps & InferGetServerSidePropsType<typeof getServerSideProps>){
  const myRef =  useRef(null);
  const t = useTranslations('Index');
  const scrollIntoView = useScrollToView(myRef);
  const loginModal = useLoginModal();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fluctuating, setFluctuating] = useState<boolean>(false)
  const [messages, setMessages] = useState([
    {
      "role": "system",
      "content": "You are a helpful assistant."
    }
  ])

  useEffect(() => {
    scrollIntoView();
    toast('Hello World')
  }, [scrollIntoView]);

  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const chatKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.shiftKey === false && e.keyCode === 13 && isLoading === false) {
      setInputValue('');
      e.preventDefault();
      handler(e);
    }
  }
  // 发送消息
  const handler = async(e: any) => {
    if (!user) {
      return loginModal.onOpen();
    }
    e.preventDefault();
    if (isLoading || !inputValue) {
      return;
    }
    let messagesList = messages;
    messagesList.push({
      "role": "user",
      "content": inputValue
    },{
      "role": "ai",
      "content": ''
    });
    setMessages(messagesList);
    setIsLoading(true);
    scrollIntoView();
    const controller = new AbortController()
    let counter = 0
    let messageParam = messages.filter(v => v.role !== 'ai').slice(-5)
    let currentResponse: string[] = []
    setFluctuating(true)
   await fetchEventSource('https://api.helloadmin.cn/api/web/chat/completions',{
      method: "POST",
      body: JSON.stringify({
        prompt: inputValue,
        messages: messageParam,
        token: user.token
      }),
      headers: {'Content-Type': 'application/json'},
      onmessage(event) {
        if (event.data === '[DONE]') {
          setFluctuating(false)
        }
        const data = event.data
        try {
          const json = JSON.parse(data);
          const text = json.choices[0].delta?.content || '';
          currentResponse = [...currentResponse, text]
          setMessages((prev) => [...prev.slice(0, -1), {content: currentResponse.join(''), role: 'ai'}])
          setIsLoading(false);
          scrollIntoView();
          if (counter < 2 && (text.match(/\n/) || []).length) {
            // this is a prefix character (i.e., "\n\n"), do nothing
            return;
          }
          counter++;
        } catch (e) {
          // maybe parse error
          // controller.error(e);
        }
        // console.debug(event);
        // const text = data.choices[0].delta?.content || ''
      },
      onclose() {
        console.log("Connection closed by the server");
      },
    })
  }
  const loadMore = () => {

  }
  return (
    <Box className={style.chat_content}>
      {/* <button
        onClick={scrollTobBottom}
        className={`scrollDown`}
      >
        <ArrowDownwardIcon className="m-1 h-4 w-4" />
      </button> */}
      <div className={style.chat_list}>
        <InfiniteScroll         
          pageStart={0}
          loadMore={loadMore}
          hasMore={false}
          useWindow={false} className={style.scroll_bottom}>
            <Grid container direction="row" alignItems="center" justifyContent='center'>
              {messages.map((v, i) => { 
                return(
                <Grid key={i} item xs={12}>
                  <div className={v.role === 'user' ? style.user_info : style.chat_ai}>
                    <Grid item xs={12} md={10} lg={8} sx={{display: 'flex', py: {xs: 2, sm: 4}, px: {xs: 2}, lineHeight: '30px'}}>
                      <Avatar sx={{ bgcolor: v.role === 'user' ?  pink[500] : green[500], height: '30px', width: '30px', padding: '2px' }} variant="rounded" src={v.role === 'user' ? '' : "/images/1.png"} ></Avatar>
                      <Box sx={{display: 'flex', flexDirection: 'column', width: 'calc(100% - 120px)', paddingLeft: '20px', minHeight: '20px', lineHeight: '30px'}}>
                      <div className={`${fluctuating && i + 1 === messages.length && 'animate-pulse result-streaming'}`}>
                        {fluctuating && i + 1 === messages.length && !v.content ? <p></p> : <Markdown content={v.content} />}
                      </div>
                      </Box>
                    </Grid>
                  </div>
                </Grid> )})}
            </Grid>
          <Box sx={{height: '135px'}} ref={myRef}></Box>
        </InfiniteScroll>
      </div>
      <Box sx={{position: 'absolute', bottom: '2px', background: '#fff',  p: {xs: '0x', sm:'40px 0px'}, width: '100%'}}>
        <Grid container direction="row" alignItems="center" justifyContent='center'>
          <Grid item xs={12} md={10} lg={8} sx={{px: {xs: 2}}}>
            <Paper
            component="form"
            sx={{ widht: '100%', p: {xs: '6px 4px', sm:'10px 4px'}, display: 'flex', alignItems: 'center' }}
            >
              <InputBase
                multiline
                sx={{ ml: 1, flex: 1}}
                placeholder="请输入内容"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={inputValue}
                onKeyDown={chatKeyDown}
                onChange={handleChange}
              />
              <Button onClick={(e) => handler(e)} endIcon={<SendIcon sx={{color: 'rgba(142,142,160, 0.4)'}} />}>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export const getServerSideProps =  withIronSessionSsr(async function({
  req,
  res,
  locale
}) {
  const user = req.session.user || null
  const  messages = (await import(`../../../messages/${locale}/index.json`)).default
  return {
    props: { user: user,messages: messages },
  }
},
sessionOptions)