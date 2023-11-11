// import styles from "./meetingroomlistpage.module.css";

import { Header } from "~/components/Header";
import { MeetingRoomListMain } from "~/features/MeetingRoomListMain";

export function MeetingRoomListPage() {

   /* FIXME: Почему ты решил сразу все вынести в features? 
      Оставил бы тут размету типа : 

      <Container sx={{p: "0 40px"}}>
         <MeetingFilter/>
         <MeetingList/>
      </Container>

      Тебе потом будет неудобно работать с данными, связанными с этой страницей.
      Когда придется объявлять запросы / состояния и т.д. здесь и потом их пробрасывать 
         через пропсы в твой компонент features
      Короче поправь!)
      Сделай тут разметку как я выше показал, и эти два компонента сделай в
         features/MeetingFilter и features/MeetingList
      Если че, обсудим потом в дсе 
   */
  
   return (
      <>
         <Header/>
         <MeetingRoomListMain/>
      </>
   );
}
