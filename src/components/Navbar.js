import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  console.log(tasks, "1");
  return (
    <div className="navbar">
      <h1>Tasks to do</h1>
      <p>There are {console.log(tasks)} to do at the minute...</p>
    </div>
  );
};

export default Navbar;
