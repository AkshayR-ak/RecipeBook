import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SideBar = () => {
  const [isShow, setIsShow] = useState(false);
  const { keyword, mealType } = useParams();
  const [searchTerm, setSearchTerm] = useState(keyword);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}/${mealType}`);
  };

  return (
    <>
      <button
        className="fixed right-5 top-5 md:hidden block z-50"
        onClick={() => setIsShow(!isShow)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isShow ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`${isShow ? "translate-x-0" : "-translate-x-full md:-translate-x-0"
          } md:block md:w-1/4 h-screen p-6 w-3/4 bg-gray-100 bg-side-bar-background md:pt-0 md:overflow-y-auto fixed md:static bg-cover z-50 transition-transform duration-300 lg:w-1/5`}
      >
        <div className="flex justify-center m-10">
          <a href="/" className="text-3xl font-bold tracking-wide text-center ">Recipe Book
          </a>
        </div>
        {/* Seach Bar */}
        <form onSubmit={handleSubmit}>
          <div className="relative rounded-2xl bg-white/70 p-3">
            <input
              type="text"
              className="w-full bg-transparent outline-none text-gray-900"
              placeholder="Find Recipes"
              value={searchTerm === "random" ? "" : searchTerm}
              onChange={handleInputChange}
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </form>

      </div>
    </>
  );
};

export default SideBar;
