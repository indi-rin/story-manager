import React from "react";
import { Bar, Projects, Settings, Header } from "./Navbar.style";

const Navbar = () => {
  return (
    <div>
      <Bar>
        <Projects size={50} />
        <Header>Story Manager</Header>
        <Settings size={50} />
      </Bar>
    </div>
  );
};

export default Navbar;
