import { Box } from "@mui/material";
import styles from "./header.module.css"

export function Header() {
   return (
      <Box display="flex" justifyContent="center" sx={{mb: 5, backgroundColor: "#ddd"}}>
         <p>HEADER</p>
      </Box>
   );
}
