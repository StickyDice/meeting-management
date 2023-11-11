import { myFetch } from "~/libraries/fetch/fetch.ts";

const LOGIN_URL = "http://127.0.0.1:8080/login/";

interface ILoginData {
   status: boolean;
   jwt: string;
}

export const loginReq = async (email: string, password: string): Promise<ILoginData | void> => {
   return await myFetch<ILoginData>(LOGIN_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
         email,
         password,
      }),
   }).catch(err => {
      console.log(err);
   })
};

