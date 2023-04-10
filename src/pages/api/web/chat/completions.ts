// import type { User } from '../../user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
// import Cookies from "js-cookie";
import { NextApiRequest, NextApiResponse } from 'next'
import { login } from '../../chat'
import fetchJson, { FetchError } from '@/lib/fetchJson'
import {request} from '@/utils/api';
import API from '@/lib/api';
interface Message {
    role: ''
    content: string
}
interface chatParams {
    prompt: string
    messages: Message[]
}

async function chatRoute(req: NextApiRequest, res: NextApiResponse) {
  const { messages, prompt, contentType } = await req.body
console.log(Array.isArray(messages))
const val:any = res
const session:any = req.session;
console.log(session)
  // console.log(id)
  // const headers = { Authorization: 'Bearer ' + user.token, 'Content-Type': 'application/json', 'Accept': 'text/event-stream' };
  // const eventSourceInit = {
  //   headers,
  //   withCredentials: true,
  // } as EventSourceInit;
  // const chatParams = {
  //   prompt: inputValue,
  //   messages: JSON.stringify(messages)
  // }
  // const queryString = new URLSearchParams(chatParams).toString();
  // const eventSource = new EventSource(`http://dev.api.helloadmin.cn/api/web/chat/completions?${queryString}`, eventSourceInit);

  // // eventSource.onopen = (event) => {
  // //   console.log('SSE connection opened:', event);
  // // };
  // eventSource.onmessage = (event) => {
  //   debugger
  //   const data = JSON.parse(event.data);
  //   console.log('SSE message received:', data);
  // };

  // eventSource.onerror = (event) => {
  //   console.error('SSE connection error:', event);
  // };

  // return () => {
  //   eventSource.close();
  // }
  try {

    // eventSource.onerror = (event) => {
    //   console.error('SSE connection error:', event);
    // };

    // return () => {
    //   eventSource.close();
    // };
    
    await fetch('https://api.helloadmin.cn/api/web/chat/completions',{
      method: "POST",
      body: JSON.stringify({
        prompt: prompt,
        messages: messages
      }),
      headers: {'Accept': 'text/event-stream', 'Content-Type': 'application/json', 'Authorization':  'Bearer ' + session.token}
    }).then(response => {
      // res.json(response)
      const res:any = response;
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer:any = "";
    
      reader.read().then(function processResult(result:any) {
        if (result.done) {
          console.log("Server closed connection");
          return;
        }
        buffer += decoder.decode(result.value, { stream: true });
    
        const messages = buffer.split("\n");
        buffer = messages.pop();
    
        messages.forEach((data: string) => {
          // 在这里处理每个数据包
          console.log(data);
        });
    
        reader.read().then(processResult);
      });
      // if (response.ok) {
      //   console.log('成功了')
      //   const eventSource = new EventSource(response.url);
      //   eventSource.addEventListener('message', event => {
      //     console.log('Received message:', event.data);
      //     // Handle the message data here
      //   });
      // } else {
      //   console.log('11111')
      // }
    });
  // const headers = { Authorization: 'Bearer ' + session.user.token, 'Content-Type': 'text/event-stream', 'Accept': 'application/json' };
  // const eventSourceInit = {
  //   headers,
  //   withCredentials: true,
  // } as EventSourceInit;
  // if (typeof EventSource !== 'undefined') {
  //   const eventSource = new EventSource('http://dev.api.helloadmin.cn/api/web/chat/completions', eventSourceInit);

  //   // // eventSource.onopen = (event) => {
  //   // //   console.log('SSE connection opened:', event);
  //   // // };
  //   eventSource.onmessage = (event) => {
  //     const data:any = JSON.parse(event.data);
  //     console.log(data)
  //     res.json(data.data)
  //     console.log('SSE message received:', data);
  //   };
  // }
    // const data: {code: number, data: object } = await request(API.CHAT, { method: 'POST', body: {messages: messages, prompt: prompt}, accept: 'text/event-stream', contentType: 'application/json', token: session.user.token});
    // console.log(data)
    // if (data.code === 200) {
      // res.json(data.data)
    // }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(chatRoute, sessionOptions)