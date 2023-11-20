import { useState } from "react";
import { useDispatch } from "react-redux";
import { performAddDataService } from "../redux/addDataService/addDataService.action";

import { AppDispatch } from "../redux/store";
import { performDeleteDataService } from "../redux/deleteDataService/deleteDataService.action";
import { performUpdateDataService } from "../redux/updateDataService/updateDataService.action";

type useDataServiceActionType = {
  setFetchData: React.Dispatch<React.SetStateAction<number>>;
};

function useDataServiceAction({ setFetchData }: useDataServiceActionType) {
  const dispatch = useDispatch<AppDispatch>();

  const [message, setMessage] = useState<string | null>(null);
  const [displayMessageForm, setDisplayMessageForm] = useState<boolean>(false);
  const [EditId, setEditId] = useState<string | null>(null);

  const isEditing = !!EditId;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message) {
      const confirmationMessage = isEditing
        ? "Are you sure you want to update this message?"
        : "Are you sure you want to add this message?";

      const isConfirm = window.confirm(confirmationMessage);
      if (isConfirm) {
        if (isEditing) {
          dispatch(performUpdateDataService(EditId, message));
        } else {
          dispatch(performAddDataService(message));
        }
        resetFrom();
        setFetchData((prev) => prev + 1);
      }
    }
  };

  const resetFrom = () => {
    setEditId(null);
    setMessage(null);
    setDisplayMessageForm(false);
  };

  const handleDeleteMessage = (id: string) => {
    const isConfirm = window.confirm("");
    if (isConfirm) {
      dispatch(performDeleteDataService(id));
      setFetchData((prev) => prev + 1);
    }
  };

  const onClickEdit = (id: string) => {
    setDisplayMessageForm(true);
    setEditId(id);
  };

  const handleBackground = () => {
    setDisplayMessageForm(false);
    setEditId(null);
    setEditId(null);
  };

  return {
    displayMessageForm,
    EditId,
    handleSubmit,
    handleDeleteMessage,
    onClickEdit,
    handleBackground,
    setDisplayMessageForm,
    setMessage,
  };
}

export default useDataServiceAction;
