import { GetStaticPropsContext } from 'next';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
// import LocaleSwitcher from '@/components/LocaleSwitcher';
// import ScrollToBottom from 'react-scroll-to-bottom';
import ScrollToBottomCompontent from '@/components/ScrollBottom';
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@/lib/session';
import { User } from '@/pages/api/user';
import { InferGetServerSidePropsType } from 'next';
import { Grid, Paper, Theme, OutlinedInput, InputBase, IconButton, Divider, Button, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { green, pink } from '@mui/material/colors';
import style from '../index.module.scss';
import { Box, ThemeProvider, createTheme } from '@mui/system';
// import { withIronSessionApiRoute } from 'iron-session/next'
// import request from '@/utils/api';
interface IndexProps {
  user: User
}
interface RecordInfo {
  ai: string,
  human: string,
}
export default function Index({
  user
}: IndexProps & InferGetServerSidePropsType<typeof getServerSideProps>){
  const t = useTranslations('Index');
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([])
  useEffect(() => {
    async function init() {
      const data:any = await fetch('http://dev.api.helloadmin.cn/api/v1/chat/histories?page=1',{
        method: "GET",
        headers: {'Content-Type': 'application/json', 'Authorization':  'Bearer ' + user.token},
      })
      const v:any = await data.json()
      if(v.code === 200) {
        const datas = messages.concat(v.data.items)
        setMessages(datas);
      }
    }
    init();
  }, []);
  return (
    <Box className={style.chat_content}>
      <ScrollToBottomCompontent className={style.scroll_bottom}>
      {messages.map((v:RecordInfo) => {
         return(<Grid container direction="row" alignItems="center" justifyContent='center'>
            <Grid item xs={12}>
              <div className={style.user_info}>
                <Grid item xs={12} md={8} lg={6} sx={{display: 'flex', py: {xs: 2, sm: 4}, px: {xs: 2}, lineHeight: '30px'}}>
                  <Avatar sx={{ bgcolor: green[500], height: '30px', width: '30px', padding: '2px' }} variant="rounded" src="/images/1.png" >
                  </Avatar>
                  <Box sx={{display: 'flex', flexDirection: 'column', width: 'calc(100% - 120px)', paddingLeft: '20px', minHeight: '20px', lineHeight: '30px'}}>{v.human}</Box>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={style.chat_ai}>
                <Grid item xs={12} md={8} lg={6} sx={{display: 'flex', py: {xs: 2, sm: 4}, px: {xs: 2}, lineHeight: '30px'}}>
                  <Avatar sx={{ bgcolor: pink[500], height: '30px', width: '30px', padding: '2px' }} variant="rounded" >
                  </Avatar>
                  <Box sx={{display: 'flex', flexDirection: 'column', width: 'calc(100% - 120px)', paddingLeft: '20px', minHeight: '20px', lineHeight: '30px'}}>{v.ai}</Box>
                </Grid>
              </div>
            </Grid>
        </Grid>)
        })}
        <Box sx={{height: '100px'}}></Box>
      </ScrollToBottomCompontent>
    </Box>
  );
}

export const getServerSideProps =  withIronSessionSsr(async function({
  req,
  res,
  locale
}) {
  const user = req.session.user || null
  const  messages = (await import(`../../../../messages/${locale}/index.json`)).default
  if (user === null) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, token: '', open_id: '' } as User,
      },
    }
  }
  return {
    props: { user: user, messages: messages },
  }
},
sessionOptions)