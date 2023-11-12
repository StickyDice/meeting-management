import { FormEvent, useState } from "react";
import { MyModal } from "~/components/MyModal";
import { Button } from "@mui/material";

export type FreqType = {
   rule: "" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY", interval: number
}

export function BookModal( { status }: { status: boolean } ) {
   const [ isOpen, setIsOpen ] = useState(false);
   const [ rooms, setRooms ] = useState<Array<{ id: number, name: string }>>([]);
   const [ eventName, setEventName ] = useState<string>("");
   const [ descr, setDescr ] = useState<string>("");
   const [ start, setStart ] = useState<string>("");
   const [ end, setEnd ] = useState<string>("");
   const [ author, setAuthor ] = useState<string>("");
   const [ participants, setParticipants ] = useState<Array<string>>([]);
   const [ peopleAmount, setPeopleAmount ] = useState<number>(0);
   const [ freq, setFreq ] = useState<FreqType>({rule: "", interval: 0});

   const handleSubmit = ( e: FormEvent ) => {

   };

   return (
      <>
         <Button
            onClick={( e ) => (
               setIsOpen(true)
            )}
            variant={"contained"}
            disabled={!status}
         >Забронировать</Button>
         <MyModal
            setDescr={setDescr}
            setName={setEventName}
            setEnd={setEnd}
            setFreq={setFreq}
            setStart={setStart}
            buttonText={"Забронировать"}
            title={"Забронировать"}
            handleSubmit={handleSubmit}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            values={{
               id: 0,
               name: eventName,
               rooms: rooms,
               office_timezone: "",
               description: descr,
               start: start,
               end: end,
               freq: freq,
            }}
         />
      </>
   );
}
