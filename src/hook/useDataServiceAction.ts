import { useState } from "react";
import { useDispatch } from "react-redux";
import { performAddDataService } from "../redux/addDataService/addDataService.action";

import { AppDispatch } from "../redux/store";
import { performDeleteDataService } from "../redux/deleteDataService/deleteDataService.action";

type useDataServiceActionType = {
  setFetchData: React.Dispatch<React.SetStateAction<number>>;
};

function useDataServiceAction({ setFetchData }: useDataServiceActionType) {
  const dispatch = useDispatch<AppDispatch>();

  const [message, setMessage] = useState<string | null>(null);
  const [displayMessageForm, setDisplayMessageForm] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [EditId, setEditId] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message) {
      if (!isEdit) {
        dispatch(performAddDataService(message));
        setDisplayMessageForm(false);
        setMessage(null);
        setFetchData((prev) => prev + 1);
      }
    }
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
    setIsEdit(true);
    setEditId(id);
  };

  const handleBackground = () => {
    setDisplayMessageForm(false);
    setIsEdit(false);
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
