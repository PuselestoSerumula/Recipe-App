import React from "react";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <img className="image" src={image} />
    </div>
  );
};

export default Recipes;
