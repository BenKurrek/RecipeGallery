import React from "react";
import styles from "./TopBar.module.css";

function todo() {
  console.log("TODO");
}

const TopBar = () => (
  <div className={styles.topbar}>
    <div id="topBar">
      <div id="searchAndSort">
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          oninput={todo}
        />
        <div id="sorting">
          <lable for="sortByCookTime">Cook Time:</lable>
          <select id="sortByCookTime" onchange={todo}>
            <option value="fastToSlow">Fast to Slow</option>
            <option value="slowToFast">Slow to Fast</option>
            <option value="N" selected>
              None
            </option>
          </select>

          <label id="sortByRating">Rating:</label>
          <select id="sortByRating" onchange={todo}>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
            <option value="N" selected>
              None
            </option>
          </select>

          <label for="sortByDate">Date:</label>
          <select id="sortByDate" onchange={todo}>
            <option value="newToOld">New to Old</option>
            <option value="oldToNew">Old to New</option>
            <option value="N" selected>
              None
            </option>
          </select>
        </div>
      </div>
      <div id="cartIcon" onclick={todo}>
        🛒 Cart (<span id="cartCount">0</span>)
      </div>
    </div>
    <button id="applyFilters" onclick={todo}>
      Apply Filters
    </button>
  </div>
);
export default TopBar;
