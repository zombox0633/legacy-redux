import { Dispatch } from "redux";
import { UpdateDataServiceActionType } from "./updateDataService.type";
import { updateDataService } from "../../api/useDataService";

export const updateDataServiceRequest = (): UpdateDataServiceActionType => ({
  type: "EDIT_DATA_REQUEST",
  payload: [false, null],
});

export const updateDataServiceSuccess = (): UpdateDataServiceActionType => ({
  type: "EDIT_DATA_SUCCESS",
  payload: [true, null],
});

export const updateDataServiceFailure = (
  error: string
): UpdateDataServiceActionType => ({
  type: "EDIT_DATA_FAILURE",
  payload: [false, error],
});

export const performUpdateDataService = (id: string, messageText: string) => {
  return async (dispatch: Dispatch<UpdateDataServiceActionType>) => {
    try {
      const [success, error] = await updateDataService(id, messageText);
      if (success) {
        dispatch(updateDataServiceSuccess());
      } else if (error) {
        dispatch(updateDataServiceFailure(error ?? "Failed to add data."));
      }
    } catch (error) {
      dispatch(updateDataServiceFailure("An unexpected error occurred."));
    }
  };
};
