import React, { Fragment } from "react";
import "./App.css";
import DigitalWatch from "./components/DigitalWatch";

let App = () => {
  //or function App() or  let App = function()
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
          React with LifeCycle Methods
        </a>
      </nav>
      <DigitalWatch />
    </Fragment>
  );
};

export default App;
