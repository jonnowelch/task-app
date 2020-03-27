import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskDetails = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
      <div className="activity">{task.activity}</div>
      <div className="notes">{task.notes}</div>
    </li>
  );
};

export default TaskDetails;
