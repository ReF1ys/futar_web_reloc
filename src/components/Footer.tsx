"use client";

import React from "react";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Контакты */}
        <div className={styles.contacts}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span>Email:</span>{" "}
              <a href="mailto:info@example.com">infoab@example.com</a>
            </li>
          </ul>
        </div>

        {/* Быстрые ссылки для навигации */}
        <div className={styles.nav}>
          <h3>Quick Navigation</h3>
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                About
              </a>
            </li>
            <li>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Социальные сети */}
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()}Future Arcitecture. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}