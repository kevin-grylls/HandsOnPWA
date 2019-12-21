import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton } from "office-ui-fabric-react";

const App = () => (
  <div className="app">
    <PrimaryButton>Hello Azure!</PrimaryButton>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
