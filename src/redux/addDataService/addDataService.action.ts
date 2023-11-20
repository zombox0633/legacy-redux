import { Dispatch } from "redux";
import { AddDataServiceActionType } from "./addDataService.type";
import { addDataService } from "../../api/useDataService";

export const addDataServiceRequest = (): AddDataServiceActionType => ({
  type: "ADD_DATA_REQUEST",
  payload: [false, null],
});

export const addDataServiceSuccess = (): AddDataServiceActionType => ({
  type: "ADD_DATA_SUCCESS",
  payload: [true, null],
});

export const addDataServiceFailure = (
  error: string
): AddDataServiceActionType => ({
  type: "ADD_DATA_FAILURE",
  payload: [false, error],
});

export const performAddDataService = (messageText: string) => {
  return async (dispatch: Dispatch<AddDataServiceActionType>) => {
    dispatch(addDataServiceRequest());
    try {
      const [success, error] = await addDataService(messageText);
      if (success) {
        dispatch(addDataServiceSuccess());
      } else if (error) {
        dispatch(addDataServiceFailure(error ?? "Failed to add data."));
      }
    } catch (error) {
      dispatch(addDataServiceFailure("An unexpected error occurred."));
    }
  };
};
