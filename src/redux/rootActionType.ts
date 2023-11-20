import { AddDataServiceActionType } from "./addDataService/addDataService.type";
import { DeleteDataServiceActionType } from "./deleteDataService/deleteDataService.type";
import { GetDataServiceActionType } from "./getDataService/getDataService.type";
import { UpdateDataServiceActionType } from "./updateDataService/updateDataService.type";

export type RootActionType =
  | GetDataServiceActionType
  | UpdateDataServiceActionType
  | AddDataServiceActionType
  | DeleteDataServiceActionType;
