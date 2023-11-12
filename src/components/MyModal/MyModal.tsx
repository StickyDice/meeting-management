import { FormEvent } from "react";
import styles from "./mymodal.module.css";
import { Autocomplete, Box, Button, FormControl, Modal, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FullEventType } from "~/services/backend/getFullEvent.ts";
import { FreqType } from "~/features/BookModal";

interface MyModalProps {
   title: string;
   handleSubmit: (e: FormEvent) => void;
   values?: FullEventType;
   isOpen: boolean;
   setIsOpen: (status: boolean) => void;
   buttonText: string;
   setName: (name: string) => void;
   setDescr: (descr: string) => void;
   setStart: (start: string) => void;
   setEnd: (end: string) => void;
   setFreq: (freq: FreqType) => void;
}

const autoCompleteOptions = [ { value: "", label: "" }, { value: "DAILY", label: "дней" }, {
   value: "WEEKLY", label: "недель"
}, { value: "MONTHLY", label: "месяцев" }, { value: "EARLY", label: "лет" } ];

export function MyModal( { title, handleSubmit, values, isOpen, setIsOpen, buttonText, setName, setEnd, setFreq, setStart, setDescr }: MyModalProps ) {
   const hours = new Date().getHours();
   const minutes = new Date().getMinutes();


   // eslint-disable-next-line
   // @ts-ignore
   const handleClose = ( e: MouseEvent ) => { // eslint-disable-line
      e.preventDefault();
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
                        <TextField className={styles.width} onChange={(e) => {setName(e.target.value)}} value={values?.name} label={"Название мероприятия"}/>
                        <TextField className={styles.width} onChange={(e) => {setDescr(e.target.value)}} value={values?.description} label={"Описание"}/>
                        <DateTimePicker className={styles.width} onChange={(e) => {setStart(e ? e.toString() : "")}} ampm={false} value={values?.start ? dayjs(values?.start) : null}
                                        label={"Начало брони"}/>
                        <DateTimePicker className={styles.width} onChange={(e) => {setEnd(e ? e.toString() : "")}} ampm={false} value={values?.end ? dayjs(values?.end) : null}
                                        label={"Конец брони"}/>
                        <Box className={styles.width} display={"flex"} gap={1} sx={{ width: "100%" }}>
                           <TextField label={"Повторяемость события каждые"} onChange={(e) => {setFreq({rule: values ? values.freq.rule : "", interval: e.target.value})}} value={values?.freq.interval}
                                      sx={{ flexGrow: 1 }}/>
                           <Autocomplete
                              disabled={values?.freq.interval === 0 || values?.freq.interval === ""}
                              onChange={(e, value) => {setFreq({rule: value ? value.value as "" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" : "", interval: values ? values.freq.interval : 0})}}
                              sx={{ flexGrow: 1 }}
                              options={autoCompleteOptions}
                              value={autoCompleteOptions.find(option => option.value === values?.freq.rule)}
                              renderInput={( params ) => <TextField {...params} label={"недель"}/>}
                              getOptionLabel={( option ) => option.label}
                           />
                        </Box>
                        <TextField className={styles.width} label={"Пригласить пользователей"}/>
                        <Button type={"submit"} variant={"contained"}>{buttonText}</Button>
                     </Box>
                  </FormControl>
               </form>
            </Box>}
         </>
         </Modal>
   );
}
