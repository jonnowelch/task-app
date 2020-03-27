import React from "react";
import Navbar from "./components/Navbar";
import TaskContextProvider from "./contexts/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
      </TaskContextProvider>
    </div>
  );
}

export default App;
