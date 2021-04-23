import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Menu(props) {
  const { open, toggleMenu } = props;
  return (
    <>
      <div
        className={styles.menu}
        style={{ transform: open ? "translateX(0px)" : "translateX(270px)" }}
      >
        <Image
          src="/assets/icons/close.svg"
          height={36}
          width={36}
          className={styles.close}
          onClick={toggleMenu}
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
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
