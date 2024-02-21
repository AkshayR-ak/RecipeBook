// FoodCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./FoodCard.css";

const FoodCard = ({ recipe }) => {
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const imageUrl =
    (recipe.image &&
      (isValidUrl(recipe.image)
        ? recipe.image
        : `https://spoonacular.com/recipeImages/${recipe.image}`)) ||
    "https://via.placeholder.com/300x150?text=No%20Image";

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="food-card">
        <img className="food-image" src={imageUrl} alt={recipe.title} />
        <div className="card-content">
          <div className="recipe-title">{recipe.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
