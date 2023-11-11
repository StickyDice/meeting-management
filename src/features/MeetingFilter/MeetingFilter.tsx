import { Autocomplete, Grid, TextField } from "@mui/material";
import { OrganizationType } from "~/services/backend/getListOfOrganizations.ts";
import { OfficeType } from "~/services/backend/getOfficeList.ts";

const cities = [
   { label: "City1", value: "City1" },
   { label: "City2", value: "City2" },
   { label: "City3", value: "City3" },
   { label: "City4", value: "City4" },
   { label: "City5", value: "City5" },
   { label: "City6", value: "City6" },
   { label: "City7", value: "City7" },
   { label: "City8", value: "City8" },
];

interface MeetingFilterProps {
   selectCompany: (company: OrganizationType) => void;
   selectOffice: (office: OfficeType) => void;
   companies: Array<OrganizationType>;
   offices?: Array<OfficeType>;
   cities?: Array<string>;
}

export function MeetingFilter({selectCompany, selectOffice, companies, offices}: MeetingFilterProps) {
   console.log(offices);
   return (
      <Grid container spacing={2} sx={{ my: 4 }}>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               options={companies}
               getOptionLabel={(option) => option.name}
               renderInput={( params ) => <TextField {...params} label="Компания"/>}
               /*eslint-disable*/
               // @ts-ignore
               onChange={(event, value) => {value !== null ? selectCompany(value) : undefined}}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               disabled={ offices === undefined || Object.keys(offices).length === 0}
               options={ offices !== undefined ? offices : []}
               getOptionLabel={(option) => option.name}
               renderInput={( params ) => <TextField {...params} label="Офис"/>}
               /*eslint-disable*/
               // @ts-ignore
               onChange={(event, value) => {value !== null ? selectOffice(value) : undefined}}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               options={cities}
               renderInput={( params ) => <TextField {...params} label="Город"/>}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               options={[ { label: "Активные" }, { label: "Неактивные" } ]}
               renderInput={( params ) => <TextField {...params} label="Статус"/>}
            />
         </Grid>
      </Grid>
   );
}
