import styles from "./desctext.module.css"
import { Typography } from "@mui/material";

export function DescText() {
   return (
      <>
         <Typography className={styles.title} sx={{fontSize: "30px", fontWeight: 700, mb: "20px"}} component={"h2"} variant={"h2"}>Название</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Офис №1</Typography>
         <Typography className={styles.text} component={"span"} variant={"body1"}>Адрес: <Typography component={"address"}>очкеево д.3</Typography></Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Краткое или длинное описание этой переговорки. Длинна меньше= 500 символов</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Вместимость: 25 человек</Typography>
         <Typography className={styles.text} component={"p"} variant={"body1"}>Доступность: публичная</Typography>
      </>
   );
}
