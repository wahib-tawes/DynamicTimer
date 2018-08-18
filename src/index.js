import React from "react";
import ReactDOM from "react-dom";
import Timer from "./clock";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
