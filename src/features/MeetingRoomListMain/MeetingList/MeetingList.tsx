import img from "~/assets/images/companyImg.jpg";
import { Grid } from "@mui/material";
import { MeetingListItem } from "~/features/MeetingRoomListMain/MeetingList/MeetingListItem";
import { nanoid } from "nanoid";

export type EventType = {
  name: string;
  image: string;
  isActive: boolean;
  event: string;
};

const rooms: Array<EventType> = [
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
  },
];

export function MeetingList() {
   
  return (
    <Grid container spacing={2} justifySelf="center">
      {rooms.map((room) => (
         /* 
            FIXME: key нельзя указывать nanoid / random / т.п.
            key помогает реакту оптимизировать re-render компонентов
            То есть если react видит, что key поменялся, он ререндерит этот компонент,
               даже если никаких изменений не было
            Любая операция с DOM достаточно дорогостоящая, поэтому если у тебя будет много таких
               элементов, то у тебя будет в приложении не больше 20 fps
            У всех комнат есть свой id. Использей его как key.
         */
        <Grid item xs={12} sm={6} lg={4} xl={3} key={nanoid()}>
          <MeetingListItem eventItem={room} />
        </Grid>
      ))}
    </Grid>
  );
}
