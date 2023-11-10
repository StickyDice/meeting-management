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
      <Grid container gap={2} justifySelf="center">
         {events.map((event) => <MeetingListItem key={nanoid()} eventItem={event}/>)}
      </Grid>
   );
}
