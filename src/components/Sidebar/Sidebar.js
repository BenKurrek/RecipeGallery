import React, { useState, useContext } from "react";
import styles from "./Sidebar.module.css";
import { InputDataContext } from "../../context/InputDataContext";

const Sidebar = () => {
  const inputData = useContext(InputDataContext);
  const [searchTerms, setSearchTerms] = useState({});
  const [dropdownVisibility, setDropdownVisibility] = useState({});

  const handleInputChange = (key, value) => {
    setSearchTerms({ ...searchTerms, [key]: value });
    setDropdownVisibility({ ...dropdownVisibility, [key]: true });
  };

  const handleOptionClick = (key, option) => {
    setSearchTerms({ ...searchTerms, [key]: option });
    setDropdownVisibility({ ...dropdownVisibility, [key]: false });
  };

  return (
    <div className={styles.sidebar}>
      <aside id="filters" className={styles.filters}>
        {Object.keys(inputData).map((key) => {
          const filteredOptions = inputData[key].filter((opt) =>
            opt
              .toString()
              .toLowerCase()
              .includes(searchTerms[key]?.toString().toLowerCase() || ""),
          );

          return (
            <div key={key} className={styles.filterGroup}>
              <label htmlFor={key}>{key}</label>
              <div className={styles.comboboxContainer}>
                <input
                  type="text"
                  className={styles.comboboxInput}
                  placeholder="Type or select an option"
                  value={searchTerms[key] || ""}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  onFocus={() =>
                    setDropdownVisibility({
                      ...dropdownVisibility,
                      [key]: true,
                    })
                  }
                />
                {dropdownVisibility[key] && (
                  <ul className={styles.dropdownList}>
                    {filteredOptions.map((opt) => (
                      <li
                        key={opt}
                        value={opt}
                        onClick={() => handleOptionClick(key, opt)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
        <div id="loader" className={`${styles.loader} hidden`}></div>
      </aside>
    </div>
  );
};

export default Sidebar;
