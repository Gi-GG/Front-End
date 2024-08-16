import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-96 h-screen bg-highlight">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
