import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const NewTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      task: {
        activity,
        notes
      }
    });
    setActivity("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here your task to be done"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Notes on task (required)"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        required
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
