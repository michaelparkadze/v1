import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";
import Menu from "../Menu";
import styles from "./styles.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const links = [
    {
      name: "Home",
      link: isHome ? "#welcome" : "/",
    },
    {
      name: "About",
      link: isHome ? "#about" : "/#about",
    },
    {
      name: "Projects",
      link: isHome ? "#projects" : "/#projects",
    },
    {
      name: "Articles",
      link: isHome ? "#articles" : "/#articles",
    },
    {
      name: "Contact",
      link: isHome ? "#contact" : "/#contact",
    },
  ];

  useEffect(() => {
    if (isBrowser && window.location.pathname === "/") {
      setIsHome(true);
    } else setIsHome(false);
    console.log(window.location.pathname);
  }, [isBrowser && window.location.pathname]);

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.09,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.logo}
            animate="visible"
            initial="hidden"
            variants={variants}
            transition={{
              duration: 1.2,
              ease: [0.3, 0.05, -0.01, 0.3],
            }}
          >
            <a href="/">MP</a>
          </motion.div>
          {isMobile ? (
            <motion.div
              className={styles.toggle}
              animate="visible"
              initial="hidden"
              variants={variants}
              transition={{
                duration: 1.2,
                ease: [0.3, 0.05, -0.01, 0.3],
              }}
            >
              <button onClick={toggleMenu} aria-label="toggle menu state">
                <Image src="/assets/icons/menu.svg" height={28} width={28} />
              </button>
            </motion.div>
          ) : (
            <nav className={styles.nav}>
              <motion.ul initial="hidden" animate="visible" variants={list}>
                {links.map((link, index) => {
                  return (
                    <motion.a href={link.link} variants={item} key={index}>
                      <li>{link.name}</li>
                    </motion.a>
                  );
                })}
                {/*              
          
              <motion.a href="#projects" variants={item}>
                <li>Projects</li>
              </motion.a>
              <motion.a href="#articles" variants={item}>
                <li>Articles</li>
              </motion.a>
              <motion.a href="#contact" variants={item}>
                <li>Contact</li>
              </motion.a> */}
              </motion.ul>
            </nav>
          )}
        </div>
      </header>
      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  );
}
