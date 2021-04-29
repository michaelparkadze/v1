import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Menu(props) {
  const [isHome, setIsHome] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const { open, toggleMenu } = props;

  const links = [
    {
      name: "Home",
      link: isHome ? "#welcome" : "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Articles",
      link: "#articles",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    if (isBrowser && window.location.pathname === "/") {
      setIsHome(true);
    } else setIsHome(false);
    console.log(window.location.pathname);
  }, [isBrowser && window.location.pathname]);
  return (
    <>
      <div
        className={styles.menu}
        style={{ transform: open ? "translateX(0px)" : "translateX(270px)" }}
      >
        <Image
          src="/assets/icons/close.svg"
          alt="close menu icon"
          height={36}
          width={36}
          className={styles.close}
          onClick={toggleMenu}
        />
        <nav>
          <ul>
            {links.map((item, index) => {
              return (
                <li onClick={toggleMenu} key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
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
