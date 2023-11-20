import { Dispatch } from "redux";
import { DeleteDataServiceActionType } from "./deleteDataService.type";
import { deleteDataService } from "../../api/useDataService";

export const deleteDataServiceRequest = (): DeleteDataServiceActionType => ({
  type: "DELETE_DATA_REQUEST",
  payload: [false, null],
});

export const deleteDataServiceSuccess = (): DeleteDataServiceActionType => ({
  type: "DELETE_DATA_SUCCESS",
  payload: [true, null],
});

export const deleteDataServiceFailure = (
  error: string
): DeleteDataServiceActionType => ({
  type: "DELETE_DATA_FAILURE",
  payload: [false, error],
});


export const performDeleteDataService = (id: string) => {
  return async (dispatch: Dispatch<DeleteDataServiceActionType>) => {
    try {
      const [success, error] = await deleteDataService(id);
      if (success) {
        dispatch(deleteDataServiceSuccess());
      } else if (error) {
        dispatch(deleteDataServiceFailure(error ?? "Failed to add data."));
      }
    } catch (error) {
      dispatch(deleteDataServiceFailure("An unexpected error occurred."));
    }
  };
};
