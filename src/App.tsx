import useTestState from "./hook/useTestState";

function App() {
  const { count, handleIncrement } = useTestState();
  return (
    <div>
      <div className="container__button_add">
        <button onClick={handleIncrement}>add +</button>
      </div>
      <div className="board__container">
        <h1>Test Redux</h1>
        <div>{count}</div>
      </div>
    </div>
  );
}

export default App;
