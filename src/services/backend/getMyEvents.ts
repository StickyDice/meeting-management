import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://127.0.0.1:8080/user/getMyEvents?";

export type MyEventsType = Array< {
   role: "author" | "participant";
   id: number;
   name: string;
   room: {
      id: number;
      name: string;
   };
   description: string;
   start: string;
   end: string;
} >


export const getMyEvents = async (id: string) => {
   return await myFetch(URL + new URLSearchParams({id}), {}) as MyEventsType;
};
