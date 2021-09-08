import React from "react";
import * as styles from "./style.css";

const Marker = props => {
  const { color, name, changeState } = props;
  return (
    <div onClick={() => changeState()}>
      <div
        className={styles.pin}
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;