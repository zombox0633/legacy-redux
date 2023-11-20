type MessageFormType = {
  EditId: string | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
};

function MessageForm({ EditId, handleSubmit, setMessage }: MessageFormType) {
  return (
    <form onSubmit={handleSubmit} className="message__form">
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "1rem 0" }}>{`${
          EditId ? "Edit" : "Add"
        } Message`}</h2>
        <p>
          Please enter your message below. Messages should be concise and clear.
        </p>
      </div>
      <label htmlFor="messageInput">
        <input
          id="messageInput"
          type="text"
          placeholder="Type your message here..."
          required
          onChange={(e) => setMessage(e.target.value)}
          className="message__input"
        />
      </label>
      <button type="submit">{EditId ? "edit" : "add"}</button>
    </form>
  );
}

export default MessageForm;
