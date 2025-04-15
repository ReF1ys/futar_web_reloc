"use client";

import { useState } from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Закрыть меню после клика
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>FUTAR</div>
      <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
        <span className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
        <span className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></span>
      </div>
      <nav className={styles.navContainer}>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ""}`}>
          <li onClick={(e) => handleSmoothScroll(e, "home")}>Home</li>
          <li onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</li>
          <li onClick={(e) => handleSmoothScroll(e, "about")}>About</li>
        </ul>
        <button
          className={styles.startButton}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start Your Relocation
        </button>
      </nav>
    </header>
  );
}