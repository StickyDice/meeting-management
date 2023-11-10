import { MeetingFilter } from "~/features/MeetingRoomListMain/MeetingFilter";
import { MeetingList } from "~/features/MeetingRoomListMain/MeetingList";
import { Container } from "@mui/material";

export function MeetingRoomListMain() {
   return (
      <Container sx={{p: "5px"}}>
         <MeetingFilter/>
         <MeetingList/>
      </Container>
   );
}
