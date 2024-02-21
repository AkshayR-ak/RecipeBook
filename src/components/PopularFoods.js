
import React, { useState } from "react";
import useFetchPopularFood from "../hooks/useFetchPopularFood";
import FoodCard from "./FoodCard";
import LoadIcon from "../img/icon/loading.gif";
import "./PopularFoods.css";

const PopularFoods = () => {
  const [pageNumber] = useState(1);
  const pageSize = 8;

  const { isLoading, error, data } = useFetchPopularFood(pageNumber, pageSize);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h1 className="loading-text">Popular Food Recipe</h1>
        <img src={LoadIcon} alt="loading" className="loading-icon" />
      </div>
    );
  }

  if (error) {
    alert("Something went wrong. Please refresh the page or try again later.");
    return <h1 className="error-message">Something went wrong. Please refresh the page or try again later.</h1>;
  }

  return (
    <div className="popular-food-container">
      <div>
        <h1 className="section-title">Popular Food Recipe</h1>
      </div>
      <div className="food-card-grid">
        {data && data.map((recipe) => <FoodCard key={recipe.id} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default PopularFoods;
