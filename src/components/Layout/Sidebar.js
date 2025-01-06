import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import CSS for styling

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="kebab-menu" onClick={toggleSidebar}>
        &#9776;
      </div>
      <nav className={`nav-links ${open ? "show" : ""}`}>
        <Link to="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="/recipes" onClick={toggleSidebar}>
          Recipes
        </Link>
        <Link to="/add-recipe" onClick={toggleSidebar}>
          Add Recipe
        </Link>
        <Link to="/profile" onClick={toggleSidebar}>
          Profile
        </Link>
        <Link to="/login" onClick={toggleSidebar}>
          Login
        </Link>
        <Link to="/register" onClick={toggleSidebar}>
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
