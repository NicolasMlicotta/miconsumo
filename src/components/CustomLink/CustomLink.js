import React from "react";
import { Link } from "react-router-dom";
import styles from "./CustomLink.module.css";

function CustomLink(props) {
  return (
    <Link className={styles.link} to={props.to}>
      {props.children}
    </Link>
  );
}

export default CustomLink;
