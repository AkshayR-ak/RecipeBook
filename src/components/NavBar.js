import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import your CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Website Name */}
        <div className="logo">
          <a href="/" className="text-2xl font-bold tracking-wide">
            Recipe Book
          </a>
        </div>
        {/* Navbar Menu */}
        <div className="menu">
          <a href="/" className="menu-item">
            Home
          </a>
          <Link to={`/search/random/all`} className="menu-item">
            Recipes
          </Link>
          <a href="/about" className="menu-item">
            About
          </a>
        </div>
        {/* End of Navbar Menu */}
      </div>
    </nav>
  );
};

export default NavBar;
