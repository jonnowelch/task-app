import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>Tasks to do</h1>
      Thanks for checking out my task app. This is my first project using React
      Context, Hooks and Local Storage.
      {tasks.length ? (
        <p>Items in task list: {tasks.length} </p>
      ) : (
        <p>Add some tasks to get done</p>
      )}
    </div>
  );
};

export default Navbar;
