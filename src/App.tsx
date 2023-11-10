import "~/assets/styles/styles.global.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { MeetingRoomListPage } from "~/pages/MeetingRoomListPage";
import { Provider } from "react-redux";
import { store } from "~/store/store.ts";
import { LoginPage } from "~/pages/LoginPage";
import { MUIBreakpoints } from "~/assets/themes/MUIBreakpoints.ts";

function App() {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <ThemeProvider theme={MUIBreakpoints}>
               <Box>
                  <Routes>
                     <Route path="*" element={<Navigate to="/meetings"/>}/>
                     <Route path="/login" element={<LoginPage/>}/>
                     <Route path="/meetings" element={<MeetingRoomListPage/>}/>
                  </Routes>
               </Box>
            </ThemeProvider>
         </Provider>
      </BrowserRouter>
   );
}

export default App;
