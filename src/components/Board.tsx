import { DataServiceType } from "../api/DataService.type";

type BoardType = {
  data: DataServiceType[] | null;
  onClickEdit: (id: string) => void;
  handleDeleteMessage: (id: string) => void;
};

function Board({ data, onClickEdit, handleDeleteMessage }: BoardType) {
  return (
    <div className="board__container">
      <div style={{ margin: "1rem 0rem" }}>
        <h1>Test Redux</h1>
      </div>
      {data &&
        data.map((item, index) => (
          <div key={index} className="item__container">
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
