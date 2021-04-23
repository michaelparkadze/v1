import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
  const { children } = props;

  return <button className={styles.button}>{children}</button>;
}
