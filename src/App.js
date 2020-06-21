import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContextValues from "./contextValues";
import History from "./History";
import Transactions from "./Transactions";
import Expense from "./Expense";
import AppReducer from "./appReducer";
function App() {
  let reducerState = useReducer(AppReducer);
  return (
    <ContextValues.Provider value={reducerState}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="App" style={{ width: "20%" }}>
          <div>Expense Tracker</div>
          <br />
          <Expense />
          <History />
          <Transactions />
        </div>
      </div>{" "}
    </ContextValues.Provider>
  );
}

export default App;
