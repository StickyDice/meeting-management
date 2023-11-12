import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://127.0.0.1:8080/room/addEvent";
export const createEvent = async (data: ) => {
   return await myFetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
   })
      .catch(err => {
         console.log(err);
      });
};
