import React, { useContext } from "react";
import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

const applyFilters = (recipes, filters) => {
  return recipes;
};

const Gallery = ({ setCart, filteredRecipes }) => {
  console.log("Filtered recipes:", filteredRecipes);
  return (
    <main id="gallery" className={styles.gallery}>
      {filteredRecipes?.map((recipe) => (
        <GalleryItem recipe={recipe} setCart={setCart} />
      ))}
      {filteredRecipes?.length === 0 && (
        <p>No recipes found based on the selected filters.</p>
      )}
    </main>
  );
};

export default Gallery;
