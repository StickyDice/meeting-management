import styles from "./desctext.module.css"
import { Typography } from "@mui/material";
import { useContext } from "react";
import { RoomContext } from "~/context/RoomContext.ts";

export function DescText() {
   const {name, accessibility, capacity, description, office_name} = useContext(RoomContext);
   return (
      <>
         <Typography className={styles.title} sx={{fontSize: "30px", fontWeight: 700, mb: "20px"}} component={"h2"} variant={"h2"}>{name}</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Офис: {office_name}</Typography>
         <Typography className={styles.text} component={"span"} variant={"body1"}>Адрес: <Typography component={"address"}>очкеево д.3</Typography></Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>{description}</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Вместимость: {capacity} человек</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Доступность: {accessibility === '"public"' ? "публичная" : "приватная"}</Typography>
      </>
   );
}
