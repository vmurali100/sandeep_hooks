import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";
export const TaskList = () => {
  const { tasks, addTask, deleteTask } = useContext(TaskListContext);

  return (
    <div>
      <h2
        onClick={() => {
          addTask();
        }}
      >
        Hello From Task
      </h2>
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add Task
      </button>
      <div>
        {tasks.map((task, i) => {
          return (
            <p
              onClick={() => {
                deleteTask(i);
              }}
            >
              {task.taskName}
            </p>
          );
        })}
      </div>
    </div>
  );
};
