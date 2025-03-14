"use client";

import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FUTAR</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Timeline</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <button className={styles.startButton}>Start Your Relocation</button>
    </header>
  );
}
