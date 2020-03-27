import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const BookDetails = ({ task }) => {
  const { removeTask } = useContext(TaskContext);
  return (
    <li onClick={() => removeTask(task.id)}>
      <div className="activity">{task.activity}</div>
      <div className="notes">{task.notes}</div>
    </li>
  );
};

export default BookDetails;
