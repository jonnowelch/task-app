import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([
    { acitivity: "learn react native", notes: "finish react app", id: 1 },
    { activity: "cure corona", notes: "ASAP", id: 2 }
  ]);
  console.log(tasks, "2");
  const addTask = (activity, notes) => {
    setTasks([...tasks, { activity, notes, id: tasks.length + 1 }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <TaskContext.Provider value={(tasks, addTask, removeTask)}>
      {console.log(tasks, "3")} {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
