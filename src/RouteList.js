import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings/Settings";
import Projects from "./components/Projects/Projects";

const RouteList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stories" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default RouteList;
