import { GetDataServiceActionType, GetDataServiceReducerType } from "./getDataService.type";

const getDataServiceState:GetDataServiceReducerType = {
  data: [],
  loading: false,
  error: null,
};

const getDataServiceReducer = (
  state = getDataServiceState,
  action: GetDataServiceActionType
) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload[0] };
    case "GET_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload[1] };
    default:
      return state;
  }
};

export default getDataServiceReducer;

