import { GetServerSidePropsContext } from 'next';
import { withIronSession, Session } from 'next-iron-session';
import { NextApiRequest } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next'

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [key: string]: string };
  body?: any;
  contentType?: string;
  token?: string;
  accept?: string
}
type NextIronRequest = NextApiRequest & {
  session: Session;
};
const baseURL = 'http://dev.api.helloadmin.cn';
 export async function request <T>(url: string, options: RequestOptions = {},  req?: NextApiRequest,): Promise<T> {
  // const session = req?.session;
  console.log(options.token)
  const response = await fetch( new URL(url, baseURL).toString(), {
    method: options.method || "POST",
    headers: {'Accept': options.accept || 'application/json', 'Content-Type': options.contentType || 'application/json', Authorization: (options.token ? `Bearer ${options.token}` : ''), ...options.headers},
    body: JSON.stringify(options.body)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }
  const data = await response.json() as T;
  return data;
}
// export default withIronSessionApiRoute(async (req, res) => {
//   const ironReq = req as NextIronRequest & { session: Session };
//   try {
//     const data = await request(req.url as string, {
//       method: req.method as RequestOptions['method'],
//       headers: req.headers as RequestOptions['headers'],
//       body: req.body as RequestOptions['body'],
//       contentType: req.headers['content-type'] as RequestOptions['contentType'],
//     }, ironReq);

//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }, {
//   password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPrd',
//   cookieName: 'jsc_cookie',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production',
//   },
// });
export const withAuthServerSideProps =
  (getServerSidePropsFunc: any) =>
  withIronSession(async (ctx: GetServerSidePropsContext & { req: NextApiRequest & { cookies: { [key: string]: string } } }) => {
    const session = JSON.parse(ctx.req.cookies.session);

    if (!session || !session.token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return getServerSidePropsFunc(ctx);
  }, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });