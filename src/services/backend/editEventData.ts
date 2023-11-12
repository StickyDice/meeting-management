import { myFetch } from "~/libraries/fetch/fetch.ts";
import { FullEventType } from "~/services/backend/getFullEvent.ts";

const URL = "http://127.0.0.1:8080/event/editEvent";

type EditEventType = {
   user_id: string;
   event_id: number;
   event_data: Omit<FullEventType, "id">
}

export const editEventData = async (data: EditEventType) => {
   return await myFetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
   })
      .catch(err => {
         console.log(err);
      });
}
