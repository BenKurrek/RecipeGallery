const fs = require("fs");

// Define a type for data which is either "raw_data" or "input_data"
type DataType = "raw_data" | "input_data";

export const parseRecipes = () => {
  const recipes;
};

const readJson = (filename: string) => {};

function parseIngredients(ingredients) {
  return ingredients.split(",").map((ingredient) => {
    const parts = ingredient.split(" - ");
    return { name: parts[0], amount: parts[1], unit: parts[2], isle: parts[3] };
  });
}

parseData("raw_data");
