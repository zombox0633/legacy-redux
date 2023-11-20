import {
  AddDataServiceReducerType,
  AddDataServiceActionType,
} from "./addDataService.type";

const addDataServiceState: AddDataServiceReducerType = {
  data: false,
  error: null,
};

export const addDataServiceReducer = (
  state = addDataServiceState,
  action: AddDataServiceActionType
) => {
  switch (action.type) {
    case "ADD_DATA_REQUEST":
      return { ...state, error: null };
    case "ADD_DATA_SUCCESS":
      return { ...state, data: action.payload[0] };
    case "ADD_DATA_FAILURE":
      return { ...state, error: action.payload[1] };
    default:
      return state;
  }
};
