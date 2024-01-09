import React from "react";
import TopBar from "../TopBar/TopBar";
import Gallery from "../Gallery/Gallery";
import styles from "./Content.module.css";

const Content = () => (
  <div className={styles.content}>
    <TopBar />
    <Gallery />
  </div>
);
export default Content;
