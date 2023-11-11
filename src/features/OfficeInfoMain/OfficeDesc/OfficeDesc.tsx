import img from "~/assets/images/companyImg.jpg";
import styles from "./officedesc.module.css";
import { Grid } from "@mui/material";
import { DescText } from "~/features/OfficeInfoMain/OfficeDesc/DescText";

export function OfficeDesc() {
   return (
      <Grid container spacing={4} sx={{mb: "30px"}}>
         <Grid item>
            <img className={styles.descImg} src={img} alt="CompanyImg"/>
         </Grid>
         <Grid item>
            <DescText/>
         </Grid>
      </Grid>
   );
}
