import React, { useState } from "react";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Menu from "../Menu";
import styles from "./styles.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 768;

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>
          <a href="/">MP</a>
        </div>
        {isMobile ? (
          <div className={styles.toggle}>
            <button onClick={toggleMenu}>
              <Image src="/assets/icons/menu.svg" height={28} width={28} />
            </button>
          </div>
        ) : (
          <nav className={styles.nav}>
            <ul>
              <a href="#welcome">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="#articles">
                <li>Articles</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        )}
      </header>
      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  );
}
