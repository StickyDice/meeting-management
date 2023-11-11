import { Box } from "@mui/material";
import { EventType } from "~/features/MeetingRoomListMain/MeetingList";
import styles from "./meetinglistitem.module.css";
import { Link } from "react-router-dom";

interface MeetingListItemProps {
   eventItem: EventType;
}

export function MeetingListItem( { eventItem }: MeetingListItemProps ) {
   return (
      <Box sx={{ backgroundColor: "#ddd", padding: "18px 25px 0 25px", minWidth: "250px", flexShrink: 0 }}>
         <Link to="/meetings/office/1">
            <img className={styles.eventImg} src={eventItem.image} alt={eventItem.name}/>
            <div className={styles.desc}>
               <span className={styles.company}>{eventItem.name}</span>
               <span className={styles.isActive}
                     style={eventItem.isActive ? { color: "#5CBA3C" } : { color: "#A93131" }}>{eventItem.isActive ? "Свободна" : "Занята"}</span>
               <span className={styles.eventName}>{eventItem.event}</span>
            </div>
         </Link>
      </Box>
   );
}
