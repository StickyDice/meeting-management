import {
   Autocomplete,
   Box,
   Button,
   FormControl,
   IconButton,
   Modal,
   TextField, Tooltip,
   Typography
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { ReactNode, useState } from "react";
import styles from "./editmodal.module.css";

export function EditModal( { children }: { children: ReactNode } ) {
   const [ isOpen, setIsOpen ] = useState(false);

   const handleClose = ( e: MouseEvent ) => {
      setIsOpen(false);
   };

   return (
      <>
         <Tooltip placement={"top"} title={"Изменить"}>
            <IconButton onClick={( e ) => setIsOpen(true)}>{children}</IconButton>
         </Tooltip>
         <Modal
            open={isOpen}
            onClose={handleClose}
         >
            <Box className={styles.modalContainer}>

               <form className={styles.form} action="">
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
                        <Typography className={styles.width} component={"p"}>Указывается местное время. Текущее время:
                           01.11.2023
                           20:02:01</Typography>
                        <TextField className={styles.width} label={"Название мероприятия"}/>
                        <TextField className={styles.width} label={"Описание"}/>
                        <DatePicker className={styles.width} label={"Начало брони"}/>
                        <DatePicker className={styles.width} label={"Конец брони"}/>
                        <Box className={styles.width} display={"flex"} gap={1} sx={{ width: "100%" }}>
                           <TextField label={"Повторяемость события каждые"} sx={{ flexGrow: 1 }}/>
                           <Autocomplete
                              sx={{ flexGrow: 1 }}
                              options={[ { value: "DAILY", label: "дней" }, {
                                 value: "WEEKLY", label: "недель"
                              }, { value: "MONTHLY", label: "месяцев" }, { value: "EARLY", label: "лет" } ]}
                              renderInput={( params ) => <TextField {...params} label={"недель"}/>}
                              getOptionLabel={( option ) => option.label}
                           />
                        </Box>
                        <TextField className={styles.width} label={"Количество человек"}/>
                        <TextField className={styles.width} label={"Пригласить пользователей"}/>
                     </Box>
                  </FormControl>
               </form>
            </Box>
         </Modal>
      </>
   );
}
