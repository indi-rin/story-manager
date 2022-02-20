import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const RouteList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RouteList;
