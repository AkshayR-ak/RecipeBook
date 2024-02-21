
import React from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import LoadIcon from "../img/icon/loading.gif";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useFetchRecipe(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={LoadIcon} alt="" className="loading-icon" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <h1>
          Something went wrong. Please refresh the page or try again later.
        </h1>
      </div>
    );
  }

  const recipeImage = recipe.image
    ? recipe.image
    : "https://via.placeholder.com/640x360?text=No+Image";

  return (
    <>
      <NavBar />
      <div className="recipe-container">
        <div className="flex flex-wrap">
          <div className="recipe-image">
            <img
              className="rounded-lg"
              src={recipeImage}
              alt={recipe.title}
            />
          </div>
          <div className="recipe-details">
            <h1 className="recipe-title">{recipe.title}</h1>
            {recipe.summary && (
              <div
                className="recipe-summary"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              ></div>
            )}
            {/* Recipe info */}
            <div className="recipe-info">
              <div className="ingredients">
                <h2 className="font-bold mb-2">Ingredients</h2>
                <ul className="ingredient-list">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
              <div className="cooking-time-servings">
                <h2 className="font-bold">Cooking Time</h2>
                <p>{recipe.readyInMinutes} minutes</p>
                <h2 className="font-bold mt-4">Servings</h2>
                <p>{recipe.servings}</p>
              </div>
            </div>
            {/* Cooking process */}
            <div className="cooking-process">
              <h2 className="font-bold mb-4 text-2xl">Cooking Process</h2>
              {recipe.analyzedInstructions.map((instruction, index) => (
                <div key={index} className="instruction">
                  <h3 className="font-bold mb-2">{instruction.name}</h3>
                  <ol className="step-list">
                    {instruction.steps.map((step) => (
                      <li key={step.number}>{step.step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
