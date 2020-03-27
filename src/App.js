import React from "react";
import Navbar from "./components/Navbar";
import TaskContextProvider from "./contexts/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
