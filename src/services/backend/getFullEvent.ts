import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://127.0.0.1:8080/event/getFullData?";

export type FullEventType = {
   id: number; 		// table_def_id события
   name: string;  	//
   rooms: Array<{	// По-порядку комнаты в которых событие
      id: number;
      name: string;
   }>
   office_timezone: string; // format: "+02:00”
   description: string;
   start: string;
   end: string;
   freq: {  		// частота события
      rule: "" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
      interval: number; // > 0
   }
}


export const getFullEvent = async (event_id: string) => {
   return await myFetch(URL + new URLSearchParams({event_id}), {}) as FullEventType;
}
