import type { IronSessionOptions } from 'iron-session'
import type { User } from '@/pages/api/user'

export const sessionOptions: IronSessionOptions = {
  password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPrd',
  cookieName: 'jsc_cookie',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  // cookieOptions: {
  //   secure: process.env.NODE_ENV === 'production',
  // },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}