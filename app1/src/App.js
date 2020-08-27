import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";
import { CountFunc } from "./CountFunc";
import CRUD from "./CRUD";
import { CRUDFunck } from "./CRUDFunck";
import TaskListContextProvider from "./Context/TaskListContext2";
import { AllTasks } from "./Components/AllTasks";

function App() {
  return (
    <TaskListContextProvider>
      <div className="App">
        {/* <Count /> */}
        {/* <CountFunc /> */}
        {/* <CRUD /> */}
        {/* <CRUDFunck /> */}
        {/* <TaskList /> */}
        <AllTasks />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
