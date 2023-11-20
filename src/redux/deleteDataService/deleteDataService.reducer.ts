import {
  DeleteDataServiceReducerType,
  DeleteDataServiceActionType,
} from "./deleteDataService.type";

const deleteDataServiceState: DeleteDataServiceReducerType = {
  data: false,
  error: null,
};

export const deleteDataServiceReducer = (
  state = deleteDataServiceState,
  action: DeleteDataServiceActionType
) => {
  switch (action.type) {
    case "DELETE_DATA_REQUEST":
      return { ...state, error: null };
    case "DELETE_DATA_SUCCESS":
      return { ...state, data: action.payload[0] };
    case "DELETE_DATA_FAILURE":
      return { ...state, error: action.payload[1] };
    default:
      return state;
  }
};
