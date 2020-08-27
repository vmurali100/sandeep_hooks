import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { taskName: "Task Name 1" },
    { taskName: "Task Name 2" },
    { taskName: "Task Name 3" },
  ]);
  const addTask = () => {
    setTasks([{ taskName: "Task Name 4" }]);
  };

  const deleteTask = (i) => {
    let newTasks = tasks.filter((task, index) => {
      return index !== i;
    });
    setTasks(newTasks);
  };
  return (
    <TaskListContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
