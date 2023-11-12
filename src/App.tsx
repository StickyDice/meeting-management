import "~/assets/styles/styles.global.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { MeetingRoomListPage } from "~/pages/MeetingRoomListPage";
import { Provider } from "react-redux";
import { store } from "~/store/store.ts";
import { LoginPage } from "~/pages/LoginPage";
import { MyTheme } from "~/assets/themes/MUIBreakpoints.ts";
import { OfficeInfoPage } from "~/pages/OfficeInfoPage";
import { MyEventsPage } from "~/pages/MyEventsPage";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <ThemeProvider theme={MyTheme}>
                  <Box>
                     <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/meetings" element={<MeetingRoomListPage/>}/>
                        <Route path="/meetings/office/:id" element={<OfficeInfoPage/>}/>
                        <Route path="my/events" element={<MyEventsPage/>}/>
                     </Routes>
                  </Box>
               </ThemeProvider>
            </LocalizationProvider>
         </Provider>
      </BrowserRouter>
   );
}

export default App;
