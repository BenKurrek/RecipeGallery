import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import styles from "./Container.module.css";

const Container = ({
  setIsModalOpen,
  cart,
  setCart,
  currentFilters,
  setCurrentFilters,
}) => {
  return (
    <div className={styles.container}>
      <Sidebar filters={currentFilters} setFilters={setCurrentFilters} />
      <Content
        setIsModalOpen={setIsModalOpen}
        cart={cart}
        setCart={setCart}
        filters={currentFilters}
        setFilters={setCurrentFilters}
      />
    </div>
  );
};
export default Container;
