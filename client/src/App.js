import React, { Component } from "react";
import "./App.css";
import Message from "./Message.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Websockets Demo 4/29/19. Repo{" "}
          <a href="https://github.com/brilles/websockets-demo">here</a>{" "}
        </h2>
        <Message />
      </div>
    );
  }
}

export default App;
