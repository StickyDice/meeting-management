import { Box } from "@mui/material";
import { EventType } from "~/features/MeetingRoomListMain/MeetingList";
import styles from "./meetinglistitem.module.css";

interface MeetingListItemProps {
   eventItem: EventType;
}

export function MeetingListItem( { eventItem }: MeetingListItemProps ) {
   return (
      <Box className={styles.meetingListItemBox}>
         <img className={styles.eventImg} src={eventItem.image} alt={eventItem.name}/>
         <div className={styles.desc}>
            <span className={styles.company}>{eventItem.name}</span>
            <span className={styles.isActive} style={eventItem.isActive ? {color: "#5CBA3C"} : {color: "#A93131"}}>{eventItem.isActive ? "Доступна" : "Недоступна"}</span>
         </div>
      </Box>
   );
}
