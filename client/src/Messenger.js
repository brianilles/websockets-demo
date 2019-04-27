import React, { Component } from "react";
import io from "socket.io-client";

class Messenger extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      message: "",
      messages: []
    };

    const socket = io("localhost:1234");
    socket.on("receive", data => {
      this.setState({ messages: [...this.state.messages, data] });
    });
  }

  // Event driven data transmission
  send = e => {
    e.preventDefault();
    const socket = io("localhost:1234");
    console.log("EMITTING TO SERVER:", {
      user: this.state.username,
      message: this.state.message
    });
    socket.emit("send", {
      user: this.state.username,
      message: this.state.message
    });
    this.setState({ message: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="messenger-wrapper">
        <h3>Messenger</h3>
        <form onSubmit={this.send}>
          {this.state.messages.map((message, index) => {
            return (
              <p key={index}>
                {message.user}: {message.message}
              </p>
            );
          })}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Messenger;
