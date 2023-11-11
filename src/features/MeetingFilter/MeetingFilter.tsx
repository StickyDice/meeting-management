import { Autocomplete, Grid, TextField } from "@mui/material";
import { OrganizationType } from "~/services/backend/getListOfOrganizations.ts";
import { OfficeType } from "~/services/backend/getOfficeList.ts";

interface MeetingFilterProps {
   selectCompany: ( company: OrganizationType ) => void;
   selectOffice: ( office: OfficeType | null ) => void;
   selectCity: ( city: string ) => void;
   changeStatus: () => void;
   companies: Array<OrganizationType>;
   offices?: Array<OfficeType>;
   cities?: Array<string>;
   status?: boolean;
   city?: string;
}

export function MeetingFilter( {selectCompany, selectOffice, selectCity, companies, offices, cities, city}: MeetingFilterProps ) {
   return ( <Grid container spacing={2} sx={{ my: 4 }}>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               options={companies}
               getOptionLabel={( option ) => option.name}
               renderInput={( params ) => <TextField {...params} label="Компания"/>}
               getOptionDisabled={( option ) => option.status == false}
               /*eslint-disable*/
               // @ts-ignore
               onChange={( event, value ) => {
                  value !== null ? selectCompany(value) : undefined;
               }}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               disabled={offices === undefined || Object.keys(offices).length === 0}
               options={offices !== undefined ? offices : []}
               getOptionLabel={( option ) => `${option.city}, ${option.name}`}
               renderInput={( params ) => <TextField {...params} label="Офис"/>}
               /*eslint-disable*/
               // @ts-ignore
               onChange={( event, value ) => {
                  if (value !== null) {
                     selectOffice(value);
                     selectCity(value.city);
                  }
               }}
            />
         </Grid>
         <Grid item xs={6} sm={3}>
            <Autocomplete
               sx={{ backgroundColor: "primary", width: "100%" }}
               disabled={cities === undefined}
               options={cities ? cities : []}
               renderInput={( params ) => <TextField {...params} label="Город"/>}
               value={city}
               /*eslint-disable*/
               // @ts-ignore
               onChange={( event, value ) => {
                  if (value !== null) {
                     selectCity(value);
                     selectOffice(null);
                  }
               }}
            />
         </Grid>
         {/*<Grid item xs={6} sm={3}>*/}
         {/*   <Autocomplete*/}
         {/*      sx={{ backgroundColor: "primary", width: "100%" }}*/}
         {/*      options={[ { label: "Активные", value: true }, { label: "Неактивные", value: false } ]}*/}
         {/*      getOptionLabel={(option): string => option.label}*/}
         {/*      renderInput={( params ) => <TextField {...params} label="Статус"/>}*/}
         {/*      isOptionEqualToValue={(option, value) => option.value === value.value}*/}
         {/*      onChange={(event, value) => {value !== null ? changeStatus() : undefined}}*/}
         {/*   />*/}
         {/*</Grid>*/}
      </Grid> );
}
