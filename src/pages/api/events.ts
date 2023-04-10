import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { userInfo } from '@/pages/api/chat'

async function eventsRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user

  if (!user || user.isLoggedIn === false) {
    res.status(401).end()
    return
  }

  try {
    const response = await userInfo();
    res.json(response)
  } catch (error) {
    res.status(200).json([])
  }
}

export default withIronSessionApiRoute(eventsRoute, sessionOptions)