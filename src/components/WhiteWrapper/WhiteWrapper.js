import React from "react";
import styles from "./WhiteWrapper.module.css";

function WhiteWrapper(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

export default WhiteWrapper;
