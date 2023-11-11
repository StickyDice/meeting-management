import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import styles from "./officeevents.module.css"

export function OfficeEvents() {
   return (
      <>
         <Typography component={"h2"} variant={"h2"} sx={{ fontSize: "30px", fontWeight: 700 }}>Мероприятия в
            переговорной</Typography>
         <Box className={styles.tableBox}>
            <Table sx={{ minWidth: "800px" }}>
               <TableHead>
                  <TableRow>
                     <TableCell>Название</TableCell>
                     <TableCell>Автор</TableCell>
                     <TableCell>Дата/время</TableCell>
                     <TableCell>Длительность</TableCell>
                     <TableCell>Повторы</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     <TableCell>Собеседование</TableCell>
                     <TableCell>Яндекс</TableCell>
                     <TableCell>20.11.2023</TableCell>
                     <TableCell>2 часа</TableCell>
                     <TableCell>Раз в неделю</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>Собеседование</TableCell>
                     <TableCell>Яндекс</TableCell>
                     <TableCell>20.11.2023</TableCell>
                     <TableCell>2 часа</TableCell>
                     <TableCell>Раз в неделю</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>Собеседование</TableCell>
                     <TableCell>Яндекс</TableCell>
                     <TableCell>20.11.2023</TableCell>
                     <TableCell>2 часа</TableCell>
                     <TableCell>Раз в неделю</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>Собеседование</TableCell>
                     <TableCell>Яндекс</TableCell>
                     <TableCell>20.11.2023</TableCell>
                     <TableCell>2 часа</TableCell>
                     <TableCell>Раз в неделю</TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </Box>
      </>
   );
}
