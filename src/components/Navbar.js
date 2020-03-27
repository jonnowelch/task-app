import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>Tasks to do</h1>
      {tasks.length ? (
        <p>There are {tasks.length} things to do</p>
      ) : (
        <p>Add some tasks to get done</p>
      )}
    </div>
  );
};

export default Navbar;
