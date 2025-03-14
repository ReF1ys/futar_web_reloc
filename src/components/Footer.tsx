"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Контакты */}
        <div className={styles.contacts}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span>Phone:</span>{" "}
              <a href="tel:+123456789">+1 234 567 89</a>
            </li>
            <li>
              <span>Email:</span>{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>
              <span>Address:</span> 123 Tech Avenue, Innovation City
            </li>
          </ul>
        </div>

        {/* Быстрые ссылки для навигации */}
        <div className={styles.nav}>
          <h3>Quick Navigation</h3>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
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
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
