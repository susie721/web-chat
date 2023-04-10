// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {request} from '@/utils/api';
import API from '@/lib/api';
type Data = {
  name: string
}
interface ResponseData<T = any> {
  code: number;
  message: string;
  data?: T;
}

export function login(param:object):Promise<ResponseData> {
  return request(API.LOGIN, {
    method: 'POST',
    body: param
  })
}
export function userInfo():Promise<ResponseData> {
  return request(API.USERINFO, {
    method: 'GET'
  });
}