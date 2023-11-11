import { Box } from "@mui/material";
import { EventType } from "~/features/MeetingList";
import styles from "./meetinglistitem.module.css";
import { Link } from "react-router-dom";

export function MeetingListItem( { id, photo, name, status }: EventType ) {
   return (
      <Link to={`/meetings/office/${id}`}>
         <Box className={styles.meetingListItemBox}>
            <img className={styles.eventImg} src={photo} alt={name}/>
            <div className={styles.desc}>
               <span className={styles.company}>{name}</span>
               <span className={styles.isActive}
                     style={status ? { color: "#5CBA3C" } : { color: "#A93131" }}>{status ? "Доступна" : "Не работает"}</span>
            </div>
         </Box>
      </Link>
   );
}
