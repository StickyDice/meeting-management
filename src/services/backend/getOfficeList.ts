import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://localhost:8080/organization/getOffices?";

export type OfficeArrayType = {
   cities: Array<string>;
   offices: Array<OfficeType>
}

export type OfficeType = {
   id: number;
   name: string;
   city: string;
   timezone: string;
}

export const getOfficeList = async ( id: number, city?: string ) => {
   return await myFetch(URL + new URLSearchParams({ id: String(id), city: city ? city : "" }), {}) as OfficeType;
};
