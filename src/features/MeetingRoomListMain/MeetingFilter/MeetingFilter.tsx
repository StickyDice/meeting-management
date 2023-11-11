import { Autocomplete, Grid, TextField } from "@mui/material";

const companies = [
  { label: "Company1", value: "Company1" },
  { label: "Company2", value: "Company2" },
  { label: "Company3", value: "Company3" },
  { label: "Company4", value: "Company4" },
  { label: "Company5", value: "Company5" },
  { label: "Company6", value: "Company6" },
  { label: "Company7", value: "Company7" },
  { label: "Company8", value: "Company8" },
  { label: "Company9", value: "Company9" },
];

const offices = [
  { label: "Office1", value: "Office1" },
  { label: "Office2", value: "Office2" },
  { label: "Office3", value: "Office3" },
  { label: "Office4", value: "Office4" },
  { label: "Office5", value: "Office5" },
  { label: "Office6", value: "Office6" },
  { label: "Office7", value: "Office7" },
  { label: "Office8", value: "Office8" },
];

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

export function MeetingFilter() {
  return (
    <Grid container spacing={2} sx={{my: 4}}>
      <Grid item xs={6} sm={3}>
        <Autocomplete
          sx={{ backgroundColor: "primary", width: "100%" }}
          options={companies}
          renderInput={(params) => <TextField {...params} label="Компания" />}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Autocomplete
          sx={{ backgroundColor: "primary", width: "100%" }}
          options={offices}
          renderInput={(params) => <TextField {...params} label="Офис" />}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Autocomplete
          sx={{ backgroundColor: "primary", width: "100%" }}
          options={cities}
          renderInput={(params) => <TextField {...params} label="Город" />}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Autocomplete
          sx={{ backgroundColor: "primary", width: "100%" }}
          options={[{ label: "Активные" }, { label: "Неактивные" }]}
          renderInput={(params) => <TextField {...params} label="Статус" />}
        />
      </Grid>
    </Grid>
  );
}
