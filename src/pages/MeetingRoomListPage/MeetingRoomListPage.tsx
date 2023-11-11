import { Header } from "~/components/Header";
import { Container, Typography } from "@mui/material";
import { MeetingFilter } from "~/features/MeetingFilter";
import { MeetingList } from "~/features/MeetingList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListOfOrganizations, OrganizationType } from "~/services/backend/getListOfOrganizations.ts";
import { getToken } from "~/utils/tokenToLocalStorage.ts";
import { getOfficeList, OfficeType } from "~/services/backend/getOfficeList.ts";

export function MeetingRoomListPage() {
   const navigate = useNavigate();
   const [ companies, setCompanies ] = useState<Array<OrganizationType>>([]);
   const [ offices, setOffices ] = useState<Array<OfficeType> | undefined>(undefined);
   const [ cities, setCities ] = useState<Array<string>>([]);
   const [ selectedCompany, setSelectedCompany ] = useState<OrganizationType>({} as OrganizationType);
   const [ selectedOffice, setSelectedOffice ] = useState<OfficeType | null>(null);
   const [ selectedCity, setSelectedCity ] = useState<string | null>(null);
   const [status, setStatus] = useState<boolean | undefined>();
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
         getOfficeList(selectedCompany.id, selectedCity === null ? "" : selectedCity).then(officeList => {
            setOffices(officeList.offices);
            setCities(officeList.cities);
         });
      }
   }, [ selectedCompany, selectedCity ]);

   const onStatusChange = () => {
      setCompanies(companies.filter(company => company.status !== status));
      setStatus(!status);
   }

   return (
      <>
         <Header/>
         <Container sx={{ p: "0 40px 40px" }}>
            <MeetingFilter
               companies={companies}
               offices={offices}
               cities={cities}
               selectCompany={setSelectedCompany}
               selectOffice={setSelectedOffice}
               selectCity={setSelectedCity}
               changeStatus={onStatusChange}
               status={status}
               city={selectedCity}
               selectedOffice={selectedOffice}
            />
            {selectedOffice === null
               ?
               <Typography component="h2">Выберите офис</Typography>
               :
               <MeetingList officeId={selectedOffice.id}/>
            }
         </Container>
      </>
   );
}
