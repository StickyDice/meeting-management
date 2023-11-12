import { myFetch } from "~/libraries/fetch/fetch.ts";

const LOGIN_URL = "http://localhost:8080/login/";

interface ILoginData {
   status: boolean;
   jwt: string;
}

export const loginReq = async ( email: string, password: string ): Promise<ILoginData> => {
   return await myFetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
         email,
         password,
      }),
   })
      .catch(err => {
         console.log(err);
      }) as ILoginData;
};

