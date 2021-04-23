import React, { useState } from "react";
import Menu from "../Menu";
import styles from "./styles.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>
          MP
          <button onClick={toggleMenu}>M</button>
        </div>
        <div className={styles.toggle}>
          <button onClick={toggleMenu}>M</button>
        </div>
      </header>
      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  );
}
