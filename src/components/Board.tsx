import { DataServiceType } from "../api/DataService.type";

type BoardType = {
  data: DataServiceType[] | null;
  onClickEdit: (id: string) => void;
  handleDeleteMessage: (id: string) => void;
};

function Board({ data, onClickEdit, handleDeleteMessage }: BoardType) {
  const sortedData = data
    ? [...data].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    : [];

  return (
    <div className="board__container">
      <div style={{ margin: "0.5rem 0rem 1.5rem" }}>
        <h1>Test Redux</h1>
      </div>
      {sortedData.map((item, index) => (
        <div key={item.id} className="item__container">
          <div className="message__container">
            <span>{index + 1}.</span>
            <p>{item.message}</p>
          </div>
          <div className="button__container">
            <button
              onClick={() => onClickEdit(item.id)}
              className="button__board"
            >
              update
            </button>
            <button
              onClick={() => handleDeleteMessage(item.id)}
              className="button__board"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
