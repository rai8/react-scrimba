import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    let logStatus;
    if (this.state.isLoggedIn === true) {
      logStatus = "in";
    } else {
      logStatus = "out";
    }
    return (
      <div>
        <h1>You are currently logged {logStatus}</h1>
      </div>
    );
  }
}
