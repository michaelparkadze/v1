import React, { useState } from "react";
import Link from "next/link";
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
          <Link href="/">MP</Link>
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
              <Link href="#welcome">
                <li>Home</li>
              </Link>
              <Link href="#about">
                <li>About</li>
              </Link>
              <Link href="#projects">
                <li>Projects</li>
              </Link>
              <Link href="#articles">
                <li>Articles</li>
              </Link>
              <Link href="#contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        )}
      </header>
      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  );
}
