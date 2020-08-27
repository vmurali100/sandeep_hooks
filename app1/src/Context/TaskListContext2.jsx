import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { taskName: "Task 1" },
    { taskName: "Task 2" },
    { taskName: "Task 3" },
  ]);
  const addTask = () => {};
  const editTask = () => {};
  const deleteTask = (i) => {
    let newTasks = tasks.filter((task, index) => {
      return i !== index;
    });
    setTasks(newTasks);
  };
  return (
    <TaskListContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
