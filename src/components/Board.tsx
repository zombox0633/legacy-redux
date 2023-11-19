import { DataServiceType } from "../api/DataService.type";

type BoardType = {
  data: DataServiceType[] | null;
};

function Board({ data }: BoardType) {
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
              <button className="button__board">update</button>
              <button className="button__board">delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Board;
