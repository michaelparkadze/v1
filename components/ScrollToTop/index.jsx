import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className={styles.scrollToTop}>
      <button
        onClick={scrollToTop}
        style={{
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <Image src="/assets/icons/up-arrow.svg" height={24} width={24} />
      </button>
    </div>
  );
}
