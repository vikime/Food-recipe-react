import React, { useEffect, useState } from "react";
import Recipe from "./recipes";
import "./styles.css";
const Main = () => {
  const APP_ID = "011f9cac";
  const APP_KEY = "903e980f0ab36852943867e645f11e5c";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          url={recipe.recipe.url}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};
export default Main;
