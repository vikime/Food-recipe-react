import React from "react";

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> url:{url}</p>
      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
