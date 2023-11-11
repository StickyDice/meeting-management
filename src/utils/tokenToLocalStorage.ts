const SEVEN_DAYS_IN_MS = 604800000;

const TOKEN_KEY = "TOKEN_KEY";

type StoredToken = {
   timeStamp: number;
   value: string;
}

const isExpired = ( timeStamp: number ): boolean => {
   const now = new Date().getTime();
   const diff = now - timeStamp;
   return diff > SEVEN_DAYS_IN_MS;
};

export const setToken = ( token: string ) => {
   localStorage.setItem(
      TOKEN_KEY,
      JSON.stringify({
         value: token,
         timeStamp: new Date().getTime(),
      })
   );
};

const removeToken = () => {
   localStorage.removeItem(TOKEN_KEY);
}

export const getToken = (): string | null => {
   const data = localStorage.getItem(TOKEN_KEY)
   if (!data) return null;
   const token: StoredToken = JSON.parse(data);
   if (!isExpired(token.timeStamp)) {
      removeToken();
      return null;
   }
   return token.value;
}
