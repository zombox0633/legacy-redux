import { DataServiceType } from "../../api/DataService.type";

export type DataServiceReducerType = {
  data: DataServiceType[] | null;
  loading: boolean;
  error: string | null;
};

export type DataServiceActionType =
  | GetDataRequestActionType
  | GetDataSuccessActionType
  | GetDataFailureActionType;

export type GetDataRequestActionType = {
  type: "GET_DATA_REQUEST";
  payload: [null, null];
};

export type GetDataSuccessActionType = {
  type: "GET_DATA_SUCCESS";
  payload: [DataServiceType[], null];
};

export type GetDataFailureActionType = {
  type: "GET_DATA_FAILURE";
  payload: [null, string];
};
