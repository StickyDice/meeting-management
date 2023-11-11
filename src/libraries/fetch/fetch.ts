export const myFetch = ( url: string, params: RequestInit ): Promise<unknown> => {
   return fetch(url, params).then(res => {
      if (res.status === 401) {
         throw new Error("You need to login");
      }
      return res;
   });
};
