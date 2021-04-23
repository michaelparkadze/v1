import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/">MP</Link>
        </div>
        <div className={styles.toggle}>
          <button onClick={toggleMenu}>
            <Image src="/assets/icons/menu.svg" height={28} width={28} />
          </button>
        </div>
      </header>
      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  );
}
