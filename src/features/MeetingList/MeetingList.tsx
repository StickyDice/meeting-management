import { Grid } from "@mui/material";
import { MeetingListItem } from "./MeetingListItem";
import { useEffect, useState } from "react";
import { getOfficeRoomList, OfficeRoomsType } from "~/services/backend/getOfficeRoomList.ts";

export type EventType = {
   name: string;
   photo: string;
   status: boolean;
   id: number;
};

interface MeetingListProps {
   officeId: number;
}

export function MeetingList( { officeId }: MeetingListProps ) {
  const [roomList, setRoomList] = useState<OfficeRoomsType | null>(null);
   useEffect(() => {
      getOfficeRoomList(officeId).then(res => {
         console.log(res)
         setRoomList(res)});
   }, []);
   return ( <Grid container spacing={2} justifySelf="center">
         {roomList && roomList.map(( room ) => ( <Grid item xs={12} sm={6} lg={4} xl={3} key={room.id}>
               <MeetingListItem {...room}/>
            </Grid> ))}
      </Grid> );
}
