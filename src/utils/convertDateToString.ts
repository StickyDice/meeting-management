export const convertDateToString = (date: Date): string => {
   const timeZone = -date.getTimezoneOffset() / 60;
   const isoDate = date.toISOString();
   return isoDate.replace(isoDate.slice(-5), "").split("T").join(" ") + ` ${timeZone >= 0 ? "+" : "-"}${Math.abs(timeZone) < 10 ? "0" : String(Math.floor(timeZone / 10))}${String(timeZone)}00`
}
