import { FormEvent } from "react";
import styles from "./mymodal.module.css";
import { Autocomplete, Box, Button, FormControl, Modal, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FullEventType } from "~/services/backend/getFullEvent.ts";

interface MyModalProps {
   title: string;
   handleSubmit: (e: FormEvent) => void;
   values?: FullEventType;
   isOpen: boolean;
   setIsOpen: (status: boolean) => void;
}

const autoCompleteOptions = [ { value: "", label: "" }, { value: "DAILY", label: "дней" }, {
   value: "WEEKLY", label: "недель"
}, { value: "MONTHLY", label: "месяцев" }, { value: "EARLY", label: "лет" } ];

export function MyModal( { title, handleSubmit, values, isOpen, setIsOpen }: MyModalProps ) {
   const hours = new Date().getHours();
   const minutes = new Date().getMinutes();


   // eslint-disable-next-line
   // @ts-ignore
   const handleClose = ( e: MouseEvent ) => { // eslint-disable-line
      setIsOpen(false);
   };

   return (
         <Modal
            open={isOpen}
            onClose={handleClose}
         ><>
            {<Box className={styles.modalContainer}>
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
                        <Typography className={styles.modalTitle} component={"h3"} variant={"h3"}>{title}</Typography>
                        <Typography className={styles.width} component={"p"}>Указывается местное время. Текущее
                           время: {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</Typography>
                        <TextField className={styles.width} value={values?.name} label={"Название мероприятия"}/>
                        <TextField className={styles.width} value={values?.description} label={"Описание"}/>
                        <DateTimePicker className={styles.width} ampm={false} value={dayjs(values?.start)}
                                        label={"Начало брони"}/>
                        <DateTimePicker className={styles.width} ampm={false} value={dayjs(values?.end)}
                                        label={"Конец брони"}/>
                        <Box className={styles.width} display={"flex"} gap={1} sx={{ width: "100%" }}>
                           <TextField label={"Повторяемость события каждые"} value={values?.freq.interval}
                                      sx={{ flexGrow: 1 }}/>
                           <Autocomplete
                              sx={{ flexGrow: 1 }}
                              options={autoCompleteOptions}
                              value={autoCompleteOptions.find(option => option.value === values?.freq.rule)}
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
   );
}
