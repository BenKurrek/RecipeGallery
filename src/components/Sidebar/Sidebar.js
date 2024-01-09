import React from "react";
import styles from "./Sidebar.module.css";

const filterOptions = [
  { label: "Choose mains:", id: "mainsSelect", multiple: true },
  { label: "Choose sides:", id: "sidesSelect", multiple: true },
  { label: "Choose ingredients:", id: "ingredientsSelect", multiple: true },
  { label: "Choose meats:", id: "meatsSelect", multiple: true },
  { label: "Choose vegetables:", id: "veggiesSelect", multiple: true },

  { label: "Max Pots:", id: "maxPotsSelect", multiple: false },
  { label: "Max Pans:", id: "maxPansSelect", multiple: false },
  { label: "Max Baking Sheets:", id: "maxBakingSheets", multiple: false },

  { label: "Special Requirements", id: "specialSelect", multiple: true },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <aside id="filters" className={styles.filters}>
        {filterOptions.map((option) => (
          <div key={option.id} className={styles.filterGroup}>
            <label htmlFor={option.id}>{option.label}</label>
            <select id={option.id} multiple={option.multiple}></select>
          </div>
        ))}
        <div id="loader" className={`${styles.loader} hidden`}></div>
      </aside>
    </div>
  );
};

export default Sidebar;
