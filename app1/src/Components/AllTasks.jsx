import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext2";

export const AllTasks = () => {
  const { tasks, deleteTask, addTask, editTask } = useContext(TaskListContext);
  console.log(deleteTask);
  return (
    <div>
      {tasks.map((task, i) => {
        return (
          <p
            key={i}
            onClick={() => {
              deleteTask(i);
            }}
          >
            {task.taskName}
          </p>
        );
      })}
    </div>
  );
};
