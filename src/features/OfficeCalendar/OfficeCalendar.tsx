import { useContext } from "react";
import { RoomContext } from "~/context/RoomContext.ts";
import styles from "./officecalendar.module.css";
import { Typography } from "@mui/material";

export function OfficeCalendar() {
   const { ya_calendar__embed_link } = useContext(RoomContext);
   return ( <>
         <Typography component={"h2"} variant={"h2"} sx={{ fontSize: "30px", fontWeight: 700 }}>Мероприятия в этой переговорной</Typography>
         <iframe className={styles.iframe} src={ya_calendar__embed_link}></iframe>
      </> );
}
