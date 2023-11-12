import {
   Autocomplete, Box, Button, FormControl, IconButton, Modal, TextField, Tooltip, Typography
} from "@mui/material";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import styles from "./editmodal.module.css";
import { FullEventType, getFullEvent } from "~/services/backend/getFullEvent.ts";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { editEventData } from "~/services/backend/editEventData.ts";
import { getToken } from "~/utils/tokenToLocalStorage.ts";
import { useNavigate } from "react-router-dom";

export function EditModal( { children, disabled, eventId }: {
   children: ReactNode, disabled: boolean, eventId: string
} ) {
   const navigate = useNavigate();
   const [ isOpen, setIsOpen ] = useState(false);
   const [ eventData, setEventData ] = useState<FullEventType | null>(null);
   const hours = new Date().getHours();
   const minutes = new Date().getMinutes();

   useEffect(() => {
      if (isOpen) {
         getFullEvent(eventId).then(data => {
            setEventData(data);
         });
      }
   }, [ isOpen ]);

   // eslint-disable-next-line
   // @ts-ignore
   const handleClose = ( e: MouseEvent ) => { // eslint-disable-line
      setIsOpen(false);
   };

   const handleSubmit = ( e: FormEvent ) => {
      e.preventDefault();
      const token = getToken();
      if (!token) {
         navigate("../login");
      } else if (eventData) {
         setIsOpen(false);
         const pushReadyData = eventData;
         delete (
            pushReadyData as { id?: number }
         ).id;
         editEventData({
            user_id: token, event_id: Number(eventId), event_data: pushReadyData
         });
      } else {
         console.log("do verify inputs");
      }
   };

   const autoCompleteOptions = [ { value: "", label: "" }, { value: "DAILY", label: "дней" }, {
      value: "WEEKLY", label: "недель"
   }, { value: "MONTHLY", label: "месяцев" }, { value: "EARLY", label: "лет" } ];

   return (
      <>
         <Tooltip placement={"top"} title={"Изменить"}>
            <IconButton disabled={disabled} onClick={( e ) => setIsOpen(true)}>{children}</IconButton>
         </Tooltip>
         <Modal
            open={isOpen}
            onClose={handleClose}
         ><>
            {eventData !== null && <Box className={styles.modalContainer}>
               <form className={styles.form} onSubmit={handleSubmit}>
                  <FormControl>
                     <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={1}
                        sx={{ maxWidth: "750px", width: "100%" }}
                     >
                        <Typography className={styles.modalTitle} component={"h3"} variant={"h3"}>Изменить
                           данные</Typography>
                        <Typography className={styles.width} component={"p"}>Указывается местное время. Текущее
                           время: {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</Typography>
                        <TextField className={styles.width} value={eventData.name} label={"Название мероприятия"}/>
                        <TextField className={styles.width} value={eventData.description} label={"Описание"}/>
                        <DateTimePicker className={styles.width} ampm={false} value={dayjs(eventData.start)}
                                        label={"Начало брони"}/>
                        <DateTimePicker className={styles.width} ampm={false} value={dayjs(eventData.end)}
                                        label={"Конец брони"}/>
                        <Box className={styles.width} display={"flex"} gap={1} sx={{ width: "100%" }}>
                           <TextField label={"Повторяемость события каждые"} value={eventData.freq.interval}
                                      sx={{ flexGrow: 1 }}/>
                           <Autocomplete
                              sx={{ flexGrow: 1 }}
                              options={autoCompleteOptions}
                              value={autoCompleteOptions.find(option => option.value === eventData.freq.rule)}
                              renderInput={( params ) => <TextField {...params} label={"недель"}/>}
                              getOptionLabel={( option ) => option.label}
                           />
                        </Box>
                        <TextField className={styles.width} label={"Количество человек"}/>
                        <TextField className={styles.width} label={"Пригласить пользователей"}/>
                        <Button type={"submit"} variant={"contained"}>Изменить</Button>
                     </Box>
                  </FormControl>
               </form>
            </Box>}
         </>
         </Modal>
      </>
   );
}
