import { Header } from "~/components/Header";
import { Box, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import {MouseEvent} from "react";
import { EventsTable } from "~/features/EventsTable";

export function MyEventsPage() {
   const [toggleValue, setToggleValue] = useState<"upcoming" | "all">("upcoming");

   /*eslint-disable*/
   // @ts-ignore
   const handleChange = (e: MouseEvent<HTMLElement>, newValue: "upcoming" | "all") => {
      setToggleValue(newValue);
   }

   return (
      <>
         <Header/>
         <Box sx={{ p: "0 120px" }}>
            <Grid container justifyContent={"space-between"}>
               <Grid item>
                  <Typography sx={{ fontSize: "32px" }} component={"h2"} variant={"h2"}>Мои мероприятия</Typography>
               </Grid>
               <Grid item>
                  <ToggleButtonGroup
                     color={"primary"}
                     value={toggleValue}
                     exclusive
                     onChange={handleChange}
                     >
                     <ToggleButton value="upcoming">Предстоящие</ToggleButton>
                     <ToggleButton value="all">Все</ToggleButton>
                  </ToggleButtonGroup>
               </Grid>
            </Grid>
            <EventsTable/>
         </Box>
      </>
   );
}
