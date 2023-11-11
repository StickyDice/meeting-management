import { Box } from "@mui/material";
import { OfficeDesc } from "~/features/OfficeInfoMain/OfficeDesc";
import { OfficeEvents } from "~/features/OfficeInfoMain/OfficeEvents";

export function OfficeInfoMain() {
   return (
      <Box sx={{p: "0 40px 40px"}}>
         <OfficeDesc/>
         <OfficeEvents/>
      </Box>
   );
}
