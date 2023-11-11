import styles from "./officedesc.module.css";
import { Grid } from "@mui/material";
import { DescText } from "./DescText";
import { useContext } from "react";
import { RoomContext } from "~/context/RoomContext.ts";

export function OfficeDesc() {
   const {photo} = useContext(RoomContext);
   return (
      <Grid container spacing={2} sx={{mb: "30px"}}>
         <Grid item xs={5}>
            <img className={styles.descImg} src={photo} alt="CompanyImg"/>
         </Grid>
         <Grid item xs={7}>
            <DescText/>
         </Grid>
      </Grid>
   );
}
