import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./officeevents.module.css";
import {MouseEvent} from "react";

export function OfficeEvents() {
   const handleDeleteButton = (e: MouseEvent) => {

   }

   const handleEditButton = (e: MouseEvent) => {

   }

   return (
      <>
         <Typography component={"h2"} variant={"h2"} sx={{ fontSize: "30px", fontWeight: 700 }}>Мои мероприятия в
            переговорной</Typography>
         <Box className={styles.tableBox}>
            <Table sx={{ minWidth: "800px" }}>
               <TableHead>
                  <TableRow>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Название</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Описание</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Автор</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Дата/время</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Длительность</TableCell>
                     <TableCell sx={{ borderBottom: 1 }}></TableCell>
                     <TableCell sx={{ borderBottom: 1 }}></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     <TableCell sx={{ borderRight: 1 }}>Собеседование</TableCell>
                     <TableCell sx={{ borderRight: 1 }}>Яндекс</TableCell>
                     <TableCell sx={{ borderRight: 1 }}>20.11.2023</TableCell>
                     <TableCell sx={{ borderRight: 1 }}>2 часа</TableCell>
                     <TableCell sx={{ borderRight: 1 }}>Раз в неделю</TableCell>
                     <TableCell>
                        <Button variant={"text"} onClick={handleEditButton} startIcon={<EditIcon />}/>
                     </TableCell>
                     <TableCell>
                        <Button variant={"text"} onClick={handleDeleteButton} startIcon={<DeleteIcon />} />
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </Box>
      </>
   );
}
