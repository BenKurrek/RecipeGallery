import React, { useState, useContext, useEffect } from "react";
import TopBar from "../TopBar/TopBar";
import Gallery from "../Gallery/Gallery";
import styles from "./Content.module.css";
import { filterRecipes } from "../../utils/helpers";
import { RecipeContext } from "../../context/RecipeContext";

const Content = ({ cart, setCart, filters, setFilters }) => {
  const recipeData = useContext(RecipeContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // This effect will run whenever recipeData changes
  useEffect(() => {
    if (recipeData) {
      console.log("RECIPE DATA: ", recipeData);
      setFilteredRecipes(recipeData);
    }
  }, [recipeData]); // Dependency array

  const onApplyFilters = (finalFilters) => {
    const newRecipes = filterRecipes(recipeData, finalFilters);
    setFilteredRecipes(newRecipes);

    console.log("Filters applied: ", finalFilters);
  };

  return (
    <div className={styles.content}>
      <TopBar
        filters={filters}
        setFilters={setFilters}
        onApplyFilters={onApplyFilters}
        cart={cart}
      />
      <Gallery filteredRecipes={filteredRecipes} setCart={setCart} />
    </div>
  );
};
export default Content;
