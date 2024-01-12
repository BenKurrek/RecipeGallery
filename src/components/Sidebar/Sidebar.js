import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { InputDataContext } from "../../context/InputDataContext";
import Dropdown from "../Common/MultiDropdown"; // Ensure this path is correct

const Sidebar = ({ filters, setFilters }) => {
  const inputData = useContext(InputDataContext);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectOption = (filterKey, option) => {
    console.log("Filter applied", filterKey, option);
    setSelectedOptions((prevSelectedOptions) => {
      const currentOptions = prevSelectedOptions[filterKey] || [];
      if (currentOptions.includes(option)) {
        return {
          ...prevSelectedOptions,
          [filterKey]: currentOptions.filter((o) => o !== option),
        };
      } else {
        return {
          ...prevSelectedOptions,
          [filterKey]: [...currentOptions, option],
        };
      }
    });
  };

  return (
    <div className={styles.sidebar}>
      <aside className={styles.filters}>
        {Object.entries(inputData).map(([filterKey, options]) => (
          <div key={filterKey} className={styles.filterGroup}>
            <label>{filterKey}</label>
            <Dropdown
              filters={filters}
              setFilters={setFilters}
              filterKey={filterKey}
              options={
                filterKey === "Choose Ingredients:"
                  ? options.map((o) => o.split("-")[0])
                  : options
              }
              selectedOptions={selectedOptions[filterKey] || []}
              onOptionToggle={(option) => handleSelectOption(filterKey, option)}
            />
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
