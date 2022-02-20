import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* ultimately routes go here */}
    </div>
  );
}

export default App;
