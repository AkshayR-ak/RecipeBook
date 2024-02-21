// HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./HeroSection.css"; // Import your CSS file

const HeroSection = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleUserInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    navigate(`/search/${keyword}/all`);
  };

  return (
    <div className="hero-section">
      {/* Web Name */}
      <div className="text-section">
        <h1 className="title">Recipe Book</h1>
        <h1 className="subtitle">Your Best Cooking Companion</h1>
      </div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input">
          <input
            type="text"
            className="input"
            placeholder="What are you craving today?"
            value={keyword}
            onChange={handleUserInput}
            required
          />
          <button type="submit" className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </form>
      {/* End of Search Bar */}
    </div>
  );
};

export default HeroSection;
