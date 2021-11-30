import React from "react";
import * as styles from "./style.css";

const Baloon = () => {
  return (
    <div className={styles.baloon}>
      <p className={styles.baloonText}>This is your location!</p>
    </div>
  );
};

export default Baloon;
