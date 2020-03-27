import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const NewTaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTask(activity, notes);
    setActivity("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Activity to do"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        required
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
