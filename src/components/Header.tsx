"use client";

import styles from "@/styles/Header.module.css";

export default function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>FUTAR</div>
      <ul className={styles.navLinks}>
        <li onClick={(e) => handleSmoothScroll(e, "home")}>Home</li>
        <li onClick={(e) => handleSmoothScroll(e, "reviews")}>Reviews</li>
        <li onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</li>
        <li onClick={(e) => handleSmoothScroll(e, "about")}>About</li>
      </ul>
      <button
        className={styles.startButton}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Start Your Relocation
      </button>
    </header>
  );
}