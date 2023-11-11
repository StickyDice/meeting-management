import { myFetch } from "~/libraries/fetch/fetch.ts";

const URL = "http://127.0.0.1:8080/user/organizations?"

export type OrganizationType = {
   id: number;
   name: string;
   status: boolean;
}

export const getListOfOrganizations = async (token: string) => {
   return await myFetch(URL + new URLSearchParams({user_id: token}), {}).catch(console.log) as Array<OrganizationType>;
}
