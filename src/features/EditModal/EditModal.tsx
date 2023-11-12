import { MyModal } from "~/components/MyModal";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { FullEventType, getFullEvent } from "~/services/backend/getFullEvent.ts";
import { IconButton, Tooltip } from "@mui/material";
import { getToken } from "~/utils/tokenToLocalStorage.ts";
import { editEventData } from "~/services/backend/editEventData.ts";
import { useNavigate } from "react-router-dom";

export function EditModal( { children, disabled, eventId }: {
   children: ReactNode, disabled: boolean, eventId: string
} ) {
   const [ eventData, setEventData ] = useState<FullEventType | null>(null);
   const [ isOpen, setIsOpen ] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      if (isOpen) {
         getFullEvent(eventId).then(data => {
            setEventData(data);
         });
      }
   }, [ isOpen ]);

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

   return (
      <>
         <Tooltip placement={"top"} title={"Изменить"}>
            <IconButton disabled={disabled} onClick={( e ) => setIsOpen(true)}>{children}</IconButton>
         </Tooltip>
         <>
            {eventData !== null && <MyModal values={eventData} title={"Изменить данные"} handleSubmit={handleSubmit} isOpen={isOpen}
                                            setIsOpen={setIsOpen}></MyModal>}
         </>
      </>
   );
}
