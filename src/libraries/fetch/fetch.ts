export const myFetch = <T>( url: string, params: RequestInit ): Promise<T> => {
   return fetch(url, params).then(res => {
      if (res.status === 401) {
         throw new Error("You need to login");
      }
      return res;
   }).then(res => res.json());
};
