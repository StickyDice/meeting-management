import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://localhost:8080/room/info?";

export type RoomInfoType = {
   id: number;
   name: string;
   office_id: number;
   photo: string; // url
   status: boolean;
   description: string;
   ya_calendar__embed_link: string; //
   accessibility: string; // доступность (публичная / приватная)
   capacity: number;
   office_name: string;
}

export const getRoomInfo = async (id: number) => {
   return await myFetch(URL + new URLSearchParams({id: String(id)}), {}) as RoomInfoType;
}
