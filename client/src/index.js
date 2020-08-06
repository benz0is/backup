import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Board } from "./components/board";

import "./styles/board.css";
import "./styles/box.css";
import "./styles/buttons.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path="/board" component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
