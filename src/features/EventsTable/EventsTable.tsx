import styles from "./eventstable.module.css";
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getMyEvents, MyEventsType } from "~/services/backend/getMyEvents.ts";
import { getToken } from "~/utils/tokenToLocalStorage.ts";
import { useNavigate } from "react-router-dom";
import { EditModal } from "~/components/EditModal";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";

export function EventsTable() {
   const navigate = useNavigate();
   const [ eventList, setEventList ] = useState<MyEventsType>([]);
   useEffect(() => {
      const token = getToken();
      if (!token) {
         navigate("../login");
      } else {
         getMyEvents(token).then(events => {
            setEventList(events);
         });
      }
   }, []);

   return (
      <>
         <Box className={styles.tableBox}>
            <Table sx={{ minWidth: "800px" }}>
               <TableHead>
                  <TableRow>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Название</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Начало мероприятия</TableCell>
                     <TableCell sx={{ borderBottom: 1, borderRight: 1 }}>Конец мероприятия</TableCell>

                     <TableCell sx={{ borderBottom: 1 }}></TableCell>
                     <TableCell sx={{ borderBottom: 1 }}></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {eventList.map(event => <TableRow key={event.id}>
                     <TableCell sx={{ borderRight: 1 }}>{event.name}</TableCell>
                     <TableCell sx={{ borderRight: 1 }}><DateTimePicker value={dayjs(event.start)}/></TableCell>
                     <TableCell sx={{ borderRight: 1 }}><DateTimePicker value={dayjs(event.end)}/></TableCell>
                     <TableCell>
                        <EditModal>
                           <EditIcon/>
                        </EditModal>
                     </TableCell>
                     <TableCell>
                        <Tooltip placement={"top"} title={"Удалить"}>
                           <IconButton><DeleteIcon/></IconButton>
                        </Tooltip>
                     </TableCell>
                  </TableRow>)}
               </TableBody>
            </Table>
         </Box>
      </>
   );
}
