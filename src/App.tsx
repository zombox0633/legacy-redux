import Board from "./components/Board";
import MessageForm from "./components/MessageForm";
import useGetDataService from "./hook/useGetDataService";
import useDataServiceAction from "./hook/useDataServiceAction";

function App() {
  const { data, setFetchData } = useGetDataService();
  const {
    displayMessageForm,
    EditId,
    handleSubmit,
    handleDeleteMessage,
    onClickEdit,
    handleBackground,
    setDisplayMessageForm,
    setMessage,
  } = useDataServiceAction({ setFetchData });

  return (
    <div>
      {displayMessageForm && (
        <div onClick={handleBackground} className="background" />
      )}
      {displayMessageForm && (
        <MessageForm
          EditId={EditId}
          handleSubmit={handleSubmit}
          setMessage={setMessage}
        />
      )}
      <div className="container__button_add">
        <button onClick={() => setDisplayMessageForm(true)}>add +</button>
      </div>
      <Board
        data={data}
        onClickEdit={onClickEdit}
        handleDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
}

export default App;
