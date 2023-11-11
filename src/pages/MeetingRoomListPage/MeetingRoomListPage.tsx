import { Header } from "~/components/Header";
import { Container } from "@mui/material";
import { MeetingFilter } from "~/features/MeetingFilter";
import { MeetingList } from "~/features/MeetingList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListOfOrganizations, OrganizationType } from "~/services/backend/getListOfOrganizations.ts";
import { getToken } from "~/utils/tokenToLocalStorage.ts";
import { getOfficeList, OfficeArrayType, OfficeType } from "~/services/backend/getOfficeList.ts";

export function MeetingRoomListPage() {
   const navigate = useNavigate();
   const [ companies, setCompanies ] = useState<Array<OrganizationType>>([]);
   const [ offices, setOffices ] = useState<OfficeArrayType | undefined>(undefined);
   const [ selectedCompany, setSelectedCompany ] = useState<OrganizationType>({} as OrganizationType);
   const [ selectedOffice, setSelectedOffice ] = useState<OfficeType>({} as OfficeType);
   const [ selectedCity, setSelectedCity ] = useState<string>("");
   useEffect(() => {
      const token = getToken();
      if (!token) {
         navigate("../login");
      } else {
         getListOfOrganizations(token).then(orgList => {
            setCompanies(orgList);
         });
      }
   }, []);

   useEffect(() => {
      if (Object.keys(selectedCompany).length !== 0) {
         getOfficeList(selectedCompany.id, selectedCity).then(officeList => {
            setOffices(officeList);
         });
      }
   }, [ selectedCompany ]);

   return (
      <>
         <Header/>
         <Container sx={{ p: "0 40px" }}>
            <MeetingFilter
               companies={companies}
               offices={offices}
               selectCompany={setSelectedCompany}
               selectOffice={setSelectedOffice}
            />
            <MeetingList/>
         </Container>
      </>
   );
}
