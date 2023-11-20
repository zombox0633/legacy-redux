export type UpdateDataServiceReducerType = {
  data: boolean;
  error: string | null;
};

export type UpdateDataServiceActionType =
  | UpdateDataRequestActionType
  | UpdateDataSuccessActionType
  | UpdateDataFailureActionType;

type UpdateDataRequestActionType = {
  type: "EDIT_DATA_REQUEST";
  payload: [boolean, null];
};

type UpdateDataSuccessActionType = {
  type: "EDIT_DATA_SUCCESS";
  payload: [boolean, null];
};

type UpdateDataFailureActionType = {
  type: "EDIT_DATA_FAILURE";
  payload: [boolean, string];
};
