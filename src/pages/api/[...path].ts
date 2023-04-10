// pages/api/[...path].ts

import { NextApiHandler } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

// 中间件函数，用于检查 session 中是否有 token，并在请求头中设置 token
const setTokenMiddleware = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const session = req.session.user;

  if (session?.token) {
    req.headers.Authorization = `Bearer ${session.token}`;
  }
  return handler(req, res);
};

// 高阶 API 路由处理程序，用于处理所有的 API 请求
const apiHandler: NextApiHandler = (req, res) => {
  // 在这里编写你的 API 逻辑
  // ...
console.log('123')
  res.status(200).json({ message: 'API 请求成功' });
};

// 将中间件函数应用到高阶处理程序中
export default withIronSessionApiRoute(setTokenMiddleware(apiHandler),sessionOptions );