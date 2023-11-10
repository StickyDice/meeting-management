import img from "~/assets/images/companyImg.jpg"
import { Grid } from "@mui/material";
import { MeetingListItem } from "~/features/MeetingRoomListMain/MeetingList/MeetingListItem";
import { nanoid } from "nanoid";

export type EventType = {
   name: string;
   image: string;
   isActive: boolean;
   event: string;
}

const events: Array<EventType> = [
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
   {
      name: "Company",
      image: img,
      isActive: true,
      event: "Оргия",
   },
]

export function MeetingList() {
   return (
      <Grid container spacing={2} justifySelf="center">
         {events.map((event) => <Grid item xs={12} sm={6} lg={4} xl={3} key={nanoid()}><MeetingListItem eventItem={event}/></Grid>)}
      </Grid>
   );
}
