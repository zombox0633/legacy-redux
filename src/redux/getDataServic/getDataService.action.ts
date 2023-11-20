import { Dispatch } from "redux";
import { DataServiceType } from "../../api/DataService.type";
import { GetDataServiceActionType } from "./getDataService.type";
import { getDataService } from "../../api/useDataService";

export const getDataServiceRequest = (): GetDataServiceActionType => ({
  type: "GET_DATA_REQUEST",
  payload: [null, null],
});

export const getDataServiceSuccess = (
  data: DataServiceType[]
): GetDataServiceActionType => ({
  type: "GET_DATA_SUCCESS",
  payload: [data, null],
});

export const getDataServiceFailure = (
  error: string
): GetDataServiceActionType => ({
  type: "GET_DATA_FAILURE",
  payload: [null, error],
});


export const fetchDataService = () => {
  return async (dispatch: Dispatch<GetDataServiceActionType>) => {
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
