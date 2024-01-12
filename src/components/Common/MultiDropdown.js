import React, { useState, useRef, useEffect } from "react";
import styles from "./MultiDropdown.module.css";

const Dropdown = ({ filters, setFilters, options, filterKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectOption = (option) => {
    setSelectedOptions((prevSelected) => {
      let newVal;
      if (prevSelected.includes(option)) {
        newVal = prevSelected.filter((opt) => opt !== option);
      } else {
        newVal = [...prevSelected, option];
      }
      let filtersToSet = filters;
      filtersToSet[filterKey] = newVal;
      setFilters(filtersToSet);
      return newVal;
    });
  };

  const removeOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((opt) => opt !== option),
    );
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          <div className={styles.selectedTags}>
            {selectedOptions.map((option) => (
              <span key={option} className={styles.tag}>
                {option.split("-")[0]}
                <button onClick={() => removeOption(option)}>&times;</button>
              </span>
            ))}
          </div>
        ) : (
          "Select options"
        )}
      </div>
      {isOpen && (
        <ul
          className={`${styles.dropdownListContainer} ${
            isOpen ? styles.show : ""
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelectOption(option)}
              className={`${styles.dropdownOption} ${
                selectedOptions.includes(option) ? styles.selected : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
