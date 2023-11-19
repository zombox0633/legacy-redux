import { Dispatch } from "redux";
import { DataServiceType } from "../../api/DataService.type";
import { DataServiceActionType } from "./getDataService.type";
import { getDataService } from "../../api/useDataService";

export const getDataServiceRequest = (): DataServiceActionType => ({
  type: "GET_DATA_REQUEST",
  payload: [null, null],
});

export const getDataServiceSuccess = (
  data: DataServiceType[]
): DataServiceActionType => ({
  type: "GET_DATA_SUCCESS",
  payload: [data, null],
});

export const getDataServiceFailure = (
  error: string
): DataServiceActionType => ({
  type: "GET_DATA_FAILURE",
  payload: [null, error],
});


export const fetchDataService = () => {
  return async (dispatch: Dispatch<DataServiceActionType>) => {
    dispatch(getDataServiceRequest());
    try {
      const [data, error] = await getDataService();
      if (data) {
        dispatch(getDataServiceSuccess(data));
      } else {
        dispatch(getDataServiceFailure(error));
      }
    } catch (error) {
      dispatch(getDataServiceFailure("An unexpected error occurred."));
    }
  };
};
