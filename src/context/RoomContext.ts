import { createContext } from "react";
import { RoomInfoType } from "~/services/backend/getRoomInfo.ts";

export const RoomContext = createContext<RoomInfoType>({} as RoomInfoType);
