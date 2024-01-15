import React, { useState, useEffect } from "react";
import styles from "./CartModal.module.css";

const formatIngredient = (ingredient) => {
  let parts = ingredient.split(" - ");
  let name = parts[0];
  let quantity = parts[1];
  let unit = parts[2];
  let section = parts[3];

  return `(${quantity}${unit == "na" ? "" : `${unit}`}) ${name}`;
};

const CartModal = ({
  isModalOpen,
  setIsModalOpen,
  cart,
  setCart,
  currentFilters,
  setCurrentFilters,
}) => {
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = (recipeTitle) => {
    let updatedCart = { ...cart };
    let curQuantity = updatedCart[recipeTitle].quantity;
    updatedCart[recipeTitle] = {
      ...updatedCart[recipeTitle],
      quantity: curQuantity + 1,
    };
    setCart(updatedCart);
  };

  const removeFromCart = (recipeTitle) => {
    let updatedCart = { ...cart };
    let curQuantity = updatedCart[recipeTitle].quantity;

    if (curQuantity === 1) {
      delete updatedCart[recipeTitle];
    } else {
      updatedCart[recipeTitle] = {
        ...updatedCart[recipeTitle],
        quantity: curQuantity - 1,
      };
    }
    setCart(updatedCart);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleEscapeKey);

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []); // Empty dependency array ensures this runs once on mount and unmount

  return (
    <div
      id="cartModal"
      className={`${styles.modal} ${isModalOpen ? styles.modalShow : ""}`}
    >
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2>{`My Cart (${Object.values(cart || {}).reduce((sum, item) => {
          console.log("item:", item);
          return sum + (item.quantity || 0);
        }, 0)})`}</h2>
        <div id="cartItems" className={styles.cartItems}>
          {Object.entries(cart).map(([recipeTitle, item]) => (
            <div key={recipeTitle} className={styles.cartItem}>
              <div className={styles.recipeDetails}>
                <div className={styles.recipeDescription}>
                  <img
                    src={`https://lh3.google.com/u/0/d/${item["Image"]}`}
                    alt={recipeTitle}
                    className={styles.recipeImage}
                  />
                  <div className={styles.recipeInfo}>
                    <h3 className={styles.recipeName}>{recipeTitle}</h3>
                    <p className={styles.recipeSubtitle}>{item["Subtitle"]}</p>
                    <div className={styles.recipeCooktime}>
                      {item["Cook Time"]} Minutes
                    </div>
                    {item["Number Pans"] !== 0 && (
                      <div className={styles.recipeSubDetails}>
                        {item["Number Pans"]} Pans
                      </div>
                    )}
                    {item["Number Pots"] !== 0 && (
                      <div className={styles.recipeSubDetails}>
                        {item["Number Pots"]} Pots
                      </div>
                    )}
                    {item["Baking Sheets"] !== 0 && (
                      <div className={styles.recipeSubDetails}>
                        {item["Baking Sheets"]} Baking Sheets
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${styles.ingredientsList} show`}>
                  {item["Ingredients"].split(",").map((ingredient, index) => (
                    <div key={index} className={styles.ingredient}>
                      {formatIngredient(ingredient)}
                    </div>
                  ))}
                </div>
                <div className={styles.cardControls}>
                  <button
                    className={styles.controlButton}
                    onClick={() => removeFromCart(recipeTitle)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className={styles.quantityInput}
                    value={cart[recipeTitle].quantity}
                  ></input>
                  <button
                    className={styles.controlButton}
                    onClick={() => addToCart(recipeTitle)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.confirmBtn} onClick="confirmCart()">
          Confirm
        </button>
      </div>
    </div>
  );
};
export default CartModal;
