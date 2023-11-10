export const convertStringToDate = (date: string, timeZone: string): Date => {
   return new Date(date + "GMT" + timeZone);
}
