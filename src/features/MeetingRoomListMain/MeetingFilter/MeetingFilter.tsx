import { Autocomplete, Box, TextField } from "@mui/material";

const companies = [
   { label: "Company1", value: "Company1"},
   { label: "Company2", value: "Company2"},
   { label: "Company3", value: "Company3"},
   { label: "Company4", value: "Company4"},
   { label: "Company5", value: "Company5"},
   { label: "Company6", value: "Company6"},
   { label: "Company7", value: "Company7"},
   { label: "Company8", value: "Company8"},
   { label: "Company9", value: "Company9"},
];

const offices = [
   {label: "Office1", value: "Office1"},
   {label: "Office2", value: "Office2"},
   {label: "Office3", value: "Office3"},
   {label: "Office4", value: "Office4"},
   {label: "Office5", value: "Office5"},
   {label: "Office6", value: "Office6"},
   {label: "Office7", value: "Office7"},
   {label: "Office8", value: "Office8"},
]

export function MeetingFilter() {
   return (
      <Box display="flex" gap={2}>
         <Autocomplete
            style={{width: "170px"}}
            sx={{backgroundColor: "primary"}}
            options={companies}
            renderInput={( params ) => <TextField {...params} label="Компания"/>}
         />
         <Autocomplete
            style={{width: "170px"}}
            sx={{backgroundColor: "primary"}}
            options={offices}
            renderInput={( params ) => <TextField {...params} label="Компания"/>}
         />
         <Autocomplete
            style={{width: "170px"}}
            sx={{backgroundColor: "primary"}}
            options={[{label: "Активные"}, {label: "Неактивные"}]}
            renderInput={( params ) => <TextField {...params} label="Компания"/>}
         />
      </Box>
   );
}
