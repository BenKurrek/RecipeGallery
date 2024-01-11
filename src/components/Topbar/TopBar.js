import React from "react";
import styles from "./TopBar.module.css";

function todo() {
  console.log("TODO");
}

const TopBar = () => (
  <div className={styles.topbar}>
    <div className={styles.topbarContainer}>
      <div className={styles.searchAndSort}>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          placeholder="Search..."
          onInput={todo}
        />
        <div className={styles.sorting} id="sorting">
          <label htmlFor="sortByCookTime">Cook Time:</label>
          <select
            id="sortByCookTime"
            className={styles.sortByCooktime}
            onChange={todo}
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
            onChange={todo}
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
            onChange={todo}
            defaultValue="N"
          >
            <option value="newToOld">New to Old</option>
            <option value="oldToNew">Old to New</option>
            <option value="N">None</option>
          </select>
        </div>
      </div>
      <div id="cartIcon" className={styles.cartIcon} onClick={todo}>
        🛒 Cart (<span id="cartCount">0</span>)
      </div>
    </div>
    <button id="applyFilters" className={styles.applyFilters} onClick={todo}>
      Apply Filters
    </button>
  </div>
);
export default TopBar;
