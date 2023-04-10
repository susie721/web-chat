import type { User } from '../user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import {request} from '@/utils/api';
import API from '@/lib/api';

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { id } = await req.body
  try {
    const data:any = await request(API.LOGIN, { method: 'POST', body: {id:  id}});
    if (data.code === 200) {
      const { access_token, open_id } = data.data;
      req.session.destroy();
      const user = { token: access_token, open_id: open_id } as User
      req.session.user = user;
      await req.session.save();
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)