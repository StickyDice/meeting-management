import { AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
   return (
      <AppBar position="static" color="default" sx={{p: [4, 2], mb: "35px"}}>
         <Box display={"flex"} justifyContent={"space-between"}>
            <Link to={"../meetings"}>Офисы</Link>
            <Link to={"../my/events"}>Мои совещания</Link>
         </Box>
      </AppBar>
   );
}
