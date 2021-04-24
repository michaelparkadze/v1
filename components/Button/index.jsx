import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
  const { children, disabled } = props;

  return (
    <button className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}
