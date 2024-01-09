import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import styles from "./Container.module.css";

const Container = () => (
  <div className={styles.container}>
    <Sidebar />
    <Content />
  </div>
);
export default Container;
