import { Box, Button, FormControl, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import styles from "./loginpage.module.css";
import { loginReq } from "~/services/backend/loginReq.ts";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "~/utils/tokenToLocalStorage.ts";

export function LoginPage() {
   const navigate = useNavigate();
   const [ login, setLogin ] = useState<string>("");
   const [ password, setPassword ] = useState<string>("");

   useEffect(() => {
      const token = getToken();
      if (token) {
         navigate("../meetings");
      }
   });

   const handleSubmit = async ( e: FormEvent ) => {
      e.preventDefault();
      const loginData = await loginReq(login, password);
      if (!loginData) {
         console.log("something went wrong");
      } else if (!loginData.status) {
         console.log("something went wrong 2");
      } else {
         setToken(loginData.jwt);
         navigate("../meetings");
      }
   };

   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
      >
         <Box className={styles.loginBox}>
            <form style={{ width: "300px" }} onSubmit={handleSubmit}>
               <FormControl>
                  <TextField sx={{ mb: 2 }} value={login} variant="filled" type="email" placeholder="email*"
                             onChange={( e ) => setLogin(e.target.value)} required={true}/>
                  <TextField sx={{ mb: 2 }} value={password} variant="filled" placeholder="password*" type="password"
                             onChange={( e ) => setPassword(e.target.value)}
                             required={true}/>
                  <Button variant="contained" type="submit">Войти</Button>
               </FormControl>
            </form>
         </Box>
      </Box>
   );
}
