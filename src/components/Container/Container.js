import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import styles from "./Container.module.css";

const Container = () => {
  const [currentFilters, setCurrentFilters] = useState({});
  const [cart, setCart] = useState({});
  return (
    <div className={styles.container}>
      <Sidebar filters={currentFilters} setFilters={setCurrentFilters} />
      <Content
        cart={cart}
        setCart={setCart}
        filters={currentFilters}
        setFilters={setCurrentFilters}
      />
    </div>
  );
};
export default Container;
