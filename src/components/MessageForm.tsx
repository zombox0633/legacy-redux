function MessageForm() {
  return (
    <div className="message__form">
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "1rem 0" }}>Add Message</h2>
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
          className="message__input"
        />
      </label>
      <button>add</button>
    </div>
  );
}

export default MessageForm;
