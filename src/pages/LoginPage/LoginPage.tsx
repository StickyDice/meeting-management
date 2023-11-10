import { Box, Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styles from "./loginpage.module.css";

export function LoginPage() {
   const [ login, setLogin ] = useState<string>("");
   const [ password, setPassword ] = useState<string>("");

   const handleLoginInput = ( e: ChangeEvent<HTMLInputElement> ) => {
      setLogin(e.target.value);
   };

   const handlePasswordInput = ( e: ChangeEvent<HTMLInputElement> ) => {
      setPassword(e.target.value);
   };

   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
      >
         <Box className={styles.loginBox}>
            <FormControl style={{width: "300px"}}>
               <TextField sx={{mb: 2}} value={login} variant="filled" type="email" placeholder="email*" onChange={handleLoginInput} required={true}/>
               <TextField sx={{mb: 2}} value={password} variant="filled" placeholder="password*" type="password"
                          onChange={handlePasswordInput}
                          required={true}/>
               <Button variant="contained">Войти</Button>
            </FormControl>
         </Box>
      </Box>
   );
}
