import { MeetingFilter } from "~/features/MeetingRoomListMain/MeetingFilter";
import { MeetingList } from "~/features/MeetingRoomListMain/MeetingList";
import { Grid } from "@mui/material";

export function MeetingRoomListMain() {
   return (
      <Grid sx={{p: "0 40px"}}>
         <MeetingFilter/>
         <MeetingList/>
      </Grid>
   );
}
