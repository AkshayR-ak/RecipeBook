
import React from "react";
import useSearch from "../hooks/useSearch";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadIcon from "../img/icon/loading.gif";
import "./Search.css";

const Search = () => {
  const { keyword: keywordParam, mealType: mealTypeParam } = useParams();
  const mealType = mealTypeParam === "all" ? "" : mealTypeParam;
  const keyword = keywordParam === "random" ? "" : keywordParam;

  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 8;
  const { isLoading, error, data } = useSearch(
    keyword,
    pageNumber,
    pageSize,
    mealType
  );

  useEffect(() => {
    setPageNumber(0);
  }, [keyword, mealType, setPageNumber]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={LoadIcon} alt="Loading" />
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="containers">
      <div className="mobile-header">
        <h1>
          {keyword} / {mealType}
        </h1>
      </div>
      <div className="recipe-grid">
        {data && data.length === 0 ? (
          <p className="no-recipe">Recipe not found.</p>
        ) : (
          data &&
          data.map((recipe) => <FoodCard key={recipe.id} recipe={recipe} />)
        )}
      </div>
    </div>
  );
};

export default Search;
