import { AddDataServiceActionType } from "./addDataService/addDataService.type";
import { DeleteDataServiceActionType } from "./deleteDataService/deleteDataService.type";
import { GetDataServiceActionType } from "./getDataServic/getDataService.type";

export type RootActionType =
  | GetDataServiceActionType
  | AddDataServiceActionType
  | DeleteDataServiceActionType;
