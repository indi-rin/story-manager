import React from "react";
import { Bar, Projects, Settings, Header } from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Bar>
        <Link to="/stories">
          <Projects size={50} />
        </Link>
        <Header>Story Manager</Header>
        <Link to="/settings">
          <Settings size={50} />
        </Link>
      </Bar>
    </div>
  );
};

export default Navbar;
