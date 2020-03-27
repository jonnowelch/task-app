import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([
    { activity: "finish this project", notes: "make it look nice", id: 1 },
    {
      activity: "start learning react native",
      notes: "make it ios and android compatible",
      id: 2
    }
  ]);
  const addTask = (activity, notes) => {
    setTasks([...tasks, { activity, notes, id: tasks.length + 1 }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
