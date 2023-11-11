import { Header } from "~/components/Header";
import { Box } from "@mui/material";
import { OfficeDesc } from "~/features/OfficeDesc";
import { OfficeEvents } from "~/features/OfficeEvents";
import { useEffect, useState } from "react";
import { getRoomInfo, RoomInfoType } from "~/services/backend/getRoomInfo.ts";
import { useParams } from "react-router-dom";
import { OfficeCalendar } from "~/features/OfficeCalendar";
import { RoomContext } from "~/context/RoomContext.ts";

export function OfficeInfoPage() {
   const { id } = useParams();
   const [ roomInfo, setRoomInfo ] = useState<RoomInfoType | null>(null);

   useEffect(() => {
      getRoomInfo(Number(id)).then(res => {
         setRoomInfo(res);
      });
   }, []);

   return ( <>
         <Header/>
         {roomInfo && <Box sx={{ p: "0 40px 40px" }}>
            <RoomContext.Provider value={roomInfo}>
               <OfficeDesc/>
               <OfficeCalendar/>
               <OfficeEvents/>
            </RoomContext.Provider>
         </Box>}
      </> );
}
