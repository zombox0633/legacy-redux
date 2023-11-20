export type DeleteDataServiceReducerType = {
  data: boolean;
  error: string | null;
};

export type DeleteDataServiceActionType =
  | DeleteDataRequestActionType
  | DeleteDataSuccessActionType
  | DeleteDataFailureActionType;

type DeleteDataRequestActionType = {
  type: "DELETE_DATA_REQUEST";
  payload: [boolean, null];
};

type DeleteDataSuccessActionType = {
  type: "DELETE_DATA_SUCCESS";
  payload: [boolean, null];
};

type DeleteDataFailureActionType = {
  type: "DELETE_DATA_FAILURE";
  payload: [boolean, string];
};
