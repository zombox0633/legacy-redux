import { useState } from "react";
import Board from "./components/Board";
import useGetDataService from "./hook/useGetDataService";
import MessageForm from "./components/MessageForm";

function App() {
  const { data } = useGetDataService();

  const [displayMessageForm, setDisplayMessageForm] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [EditId, setEditId] = useState<string | null>(null);

  return (
    <div>
      {displayMessageForm && (
        <div
          onClick={() => setDisplayMessageForm(false)}
          className="background"
        />
      )}
      {displayMessageForm && <MessageForm />}
      <div className="container__button_add">
        <button onClick={() => setDisplayMessageForm(true)}>add +</button>
      </div>
      <Board data={data}/>
    </div>
  );
}

export default App;
