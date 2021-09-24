import { signin, signup } from 'constants/api';
import httpServices from 'services/httpServices';

export const apiSignin = async (body: any) => {
  return await httpServices.post(
    `${signin}`,
    body,
    // {
    //     headers:
    //     {
    //         "Access-Control-Allow-Origin": "http://localhost:3001",
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     }
    // }
  );
};
export const apiSigup = async (body: any) => {
  return await httpServices.post(`${signup}`, body);
};
