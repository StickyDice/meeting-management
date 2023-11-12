import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://localhost:8080/office/getAllRooms?";

export type OfficeRoomsType = Array<{
   id: number;
   name: string;
   photo: string;
   status: boolean;
   is_free: boolean;
   now_event: string;
}>

export const getOfficeRoomList = async (officeId: number) => {
   return await myFetch(URL + new URLSearchParams({office_id: String(officeId)}), {}) as OfficeRoomsType;
}
