import {
  UpdateDataServiceActionType,
  UpdateDataServiceReducerType,
} from "./updateDataService.type";

const updateDataServiceState: UpdateDataServiceReducerType = {
  data: false,
  error: null,
};

export const updateDataServiceReducer = (
  state = updateDataServiceState,
  action: UpdateDataServiceActionType
) => {
  switch (action.type) {
    case "EDIT_DATA_REQUEST":
      return { ...state, error: null };
    case "EDIT_DATA_SUCCESS":
      return { ...state, data: action.payload[0] };
    case "EDIT_DATA_FAILURE":
      return { ...state, error: action.payload[1] };
    default:
      return state;
  }
};
