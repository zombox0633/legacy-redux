export type AddDataServiceReducerType = {
  data: boolean;
  error: string | null;
};

export type AddDataServiceActionType =
  | AddDataRequestActionType
  | AddDataSuccessActionType
  | AddDataFailureActionType;

type AddDataRequestActionType = {
  type: "ADD_DATA_REQUEST";
  payload: [boolean, null];
};

type AddDataSuccessActionType = {
  type: "ADD_DATA_SUCCESS";
  payload: [boolean, null];
};

type AddDataFailureActionType = {
  type: "ADD_DATA_FAILURE";
  payload: [boolean, string];
};
