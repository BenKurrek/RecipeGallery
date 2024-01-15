import React, { useState, useEffect } from "react";
import { onFilterApplied } from "../Gallery/Gallery";
import styles from "./TopBar.module.css";

function todo() {
  console.log("TODO");
}

const TopBar = ({
  setIsModalOpen,
  filters,
  setFilters,
  onApplyFilters,
  cart,
}) => {
  const [selectedText, setSelectedText] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    sortByCookTime: "N",
    sortByRating: "N",
    sortByDate: "N",
  });

  const handleApplyFilters = () => {
    let newFilters = {
      ...filters,
      cookTimeSorting: selectedOptions.sortByCookTime,
      ratingSorting: selectedOptions.sortByRating,
      dateAddedSorting: selectedOptions.sortByDate,
      searched: selectedText,
    };
    setFilters(newFilters);
    onApplyFilters(newFilters);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContainer}>
        <div className={styles.searchAndSort}>
          <input
            type="text"
            id="searchInput"
            className={styles.searchInput}
            placeholder="Search..."
            onInput={(e) => setSelectedText(e.target.value)}
          />
          <div className={styles.sorting} id="sorting">
            <label htmlFor="sortByCookTime">Cook Time:</label>
            <select
              id="sortByCookTime"
              className={styles.sortByCooktime}
              onChange={() =>
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  sortByCookTime:
                    document.getElementById("sortByCookTime").value,
                }))
              }
              defaultValue="N"
            >
              <option value="fastToSlow">Fast to Slow</option>
              <option value="slowToFast">Slow to Fast</option>
              <option value="N">None</option>
            </select>

            <label htmlFor="sortByRating">Rating:</label>
            <select
              id="sortByRating"
              className={styles.sortByRating}
              onChange={() =>
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  sortByRating: document.getElementById("sortByRating").value,
                }))
              }
              defaultValue="N"
            >
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
              <option value="N">None</option>
            </select>

            <label htmlFor="sortByDate">Date:</label>
            <select
              id="sortByDate"
              className={styles.sortByDate}
              onChange={() =>
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  sortByDate: document.getElementById("sortByDate").value,
                }))
              }
              defaultValue="N"
            >
              <option value="newToOld">New to Old</option>
              <option value="oldToNew">Old to New</option>
              <option value="N">None</option>
            </select>
          </div>
        </div>
        <div
          id="cartIcon"
          className={styles.cartIcon}
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          🛒 Cart (
          <span id="cartCount">
            {Object.values(cart || {}).reduce((sum, item) => {
              console.log("item:", item);
              return sum + (item.quantity || 0);
            }, 0)}
          </span>
          )
        </div>
      </div>
      <button
        id="applyFilters"
        className={styles.applyFilters}
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};
export default TopBar;
