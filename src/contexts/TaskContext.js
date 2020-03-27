import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setBooks] = useState([
    { task: "learn react native", notes: "finish react app", id: 1 },
    { task: "cure corona", notes: "ASAP", id: 2 }
  ]);
  const addTask = (task, notes) => {
    setBooks([...tasks, { task, notes, id: tasks.length + 1 }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <TaskContext.Provider value={(tasks, addTask, removeTask)}>
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
