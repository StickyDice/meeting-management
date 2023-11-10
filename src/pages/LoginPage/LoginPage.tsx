import styles from "./loginpage.module.sass";
import classNames from "classnames";
import { Button, TextField } from "@mui/material";

export function LoginPage() {
   return (
      <div className={styles.LoginContainer}>
         <form action="" className={styles.loginForm}>
            <TextField variant="outlined" required={true}/>
            <TextField variant="outlined" required={true}/>
            <input type="email" className={classNames(styles.emailFeild, styles.inputField)}/>
            <input type="password" className={classNames(styles.passwordField, styles.inputField)}/>
            <Button variant="contained">Войти</Button>
         </form>
      </div>
   );
}
