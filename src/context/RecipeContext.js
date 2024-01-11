import React, { createContext, useState, useEffect } from "react";
import jsonData from "../assets/data/exported_raw_data.json";

export const RecipeContext = createContext();

export const RecipeDataProvider = ({ children }) => {
  console.log("JSON DATA FOR RECIPES: ", jsonData);
  // The JSON data is directly assigned to the context's value here
  return (
    <RecipeContext.Provider value={jsonData}>{children}</RecipeContext.Provider>
  );
};
