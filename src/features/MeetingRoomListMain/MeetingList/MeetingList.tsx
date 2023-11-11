import img from "~/assets/images/companyImg.jpg";
import { Grid } from "@mui/material";
import { MeetingListItem } from "~/features/MeetingRoomListMain/MeetingList/MeetingListItem";

export type EventType = {
  name: string;
  image: string;
  isActive: boolean;
  event: string;
  key: string;
};

const rooms: Array<EventType> = [
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkf"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkfasdf"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkfasdfknjkhasvdkfj"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkf234234"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkf2iuyr87y9pufoi"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkfl12hrio8ouwqefsd"
  },
  {
    name: "Company",
    image: img,
    isActive: true,
    event: "Оргия",
    key: "aagshdkfasdkfnhjoiwae129389ro"
  },
];

export function MeetingList() {
   
  return (
    <Grid container spacing={2} justifySelf="center">
      {rooms.map((room) => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={room.key}>
          <MeetingListItem eventItem={room} />
        </Grid>
      ))}
    </Grid>
  );
}
