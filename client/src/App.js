import React, { Component } from "react";
import "./App.css";
import Messenger from "./Messenger.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          Websockets Demo 4/29/19. Repo{" "}
          <a href="https://github.com/brilles/websockets-demo">here</a>{" "}
        </h2>
        <Messenger />
      </div>
    );
  }
}

export default App;
