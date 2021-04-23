import React from "react";
import styles from "./styles.module.scss";

export default function Menu(props) {
  const { open, toggleMenu } = props;
  return (
    <>
      <div
        className={styles.menu}
        style={{ transform: open ? "translateX(0px)" : "translateX(270px)" }}
      >
        Menu {open ? "open" : "false"}
      </div>
      <div
        className={styles.darken}
        onClick={toggleMenu}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${open ? 0.4 : 0})`,
          pointerEvents: open ? "auto" : "none",
        }}
      ></div>
    </>
  );
}
