import { Box } from "@mui/material";
import { EventType } from "~/features/MeetingList";
import styles from "./meetinglistitem.module.css";
import { Link } from "react-router-dom";

export function MeetingListItem( { id, photo, name, status, is_free, now_event }: EventType ) {
   return (
      <Link to={`/meetings/office/${id}`}>
         <Box className={styles.meetingListItemBox}>
            <img className={styles.eventImg} src={photo} alt={name}/>
            <div className={styles.desc}>
               <span className={styles.company}>{name}</span>
               <div className={styles.dlkafdslfkdsafm}>
               <span className={styles.isActive}
                     style={status ? { color: "#5CBA3C" } : { color: "#A93131" }}>
                        {status ? "Доступна" : "Не работает"}</span>
               <span className={styles.isActive} style={status ? { color: "#5CBA3C" } : { color: "#A93131" }}>
                  {is_free ? "Свободна" : "Занята"}
               </span>
               </div>
               <div className={styles.dlkafdslfkdsafm} style={{justifyContent: "right"}}>
                  <span className={styles.isActive}>{now_event}</span>
               </div>
            </div>
         </Box>
      </Link>
   );
}
