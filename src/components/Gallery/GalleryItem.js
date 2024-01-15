import React, { useState, useEffect } from "react";
import styles from "./GalleryItem.module.css";

const dateAddedToReadable = (dateAdded) => {
  let date = new Date(dateAdded);
  return date.toString().split("GMT")[0];
};

const GalleryItem = ({ setCart, recipe }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setCart((prevCart) => ({
      ...prevCart,
      [recipe.Title]: { quantity, ...recipe },
    }));
  };

  return (
    <article key={recipe.Title} className={styles.galleryItem}>
      <img
        src={`https://lh3.google.com/u/0/d/${recipe.Image}`}
        alt={recipe.Title}
        className={styles.galleryImage}
      />
      <div className={styles.galleryInfo}>
        <h3 className={styles.galleryTitle}>{recipe.Title}</h3>
        <p className={styles.gallerySubtitle}>{recipe.Subtitle}</p>
        <p className={styles.galleryCooktime}>
          {recipe["Cook Time"] + " Minutes"}
        </p>
        <p className={styles.galleryRating}>{recipe["Rating"] + " /10"}</p>
        <p className={styles.galleryDateAdded}>
          {dateAddedToReadable(recipe["Date Added"])}
        </p>
        {/* Add more details as needed */}
      </div>
      <div className={styles.cardControls}>
        <button
          className={styles.controlButton}
          onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
        >
          -
        </button>
        <input
          type="number"
          className={styles.quantityInput}
          value={quantity}
        ></input>
        <button
          className={styles.controlButton}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      {/* Add an Add to Cart button if needed */}
      <button className={styles.addToCart} onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};

export default GalleryItem;
