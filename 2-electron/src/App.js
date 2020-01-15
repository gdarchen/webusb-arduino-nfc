import React, { Component } from "react";
import "./styles.global.scss";
import style from "./App.scss";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Home />
      </div>
    );
  }
}

export default App;
