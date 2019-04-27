import React, { Component } from "react";

class Message extends Component {
  state = {
    username: "",
    message: "",
    messages: []
  };
  render() {
    const { username, message, messages } = this.state;
    return (
      <div>
        <h2>Messenger</h2>
        <div className="messages-display">
          {messages.map(message => {
            return (
              <p>
                {message.user}: {message.message}
              </p>
            );
          })}
        </div>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleChanges}
          />
          <input
            type="test"
            placeholder="Message"
            name="message"
            value={message}
            onChange={this.handleChanges}
          />
          <button>Send message</button>
        </form>
      </div>
    );
  }
  handleChanges = e => this.setState({ [e.target.name]: e.target.value });
}

export default Message;
