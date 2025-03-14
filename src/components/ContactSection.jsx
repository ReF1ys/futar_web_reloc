"use client";

import React, { useState } from "react";
import styles from "@/styles/ContactSection.module.css";

// Замените на ваш URL, скопированный из Apps Script (или Google Form endpoint)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export default function ContactSection() {
  // Состояния для полей
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  // Состояния для ошибок/успеха
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // 1) Проверка обязательных полей
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in the required fields: Name, Email, and Message.");
      return;
    }
    // 2) Проверка чекбокса
    if (!agree) {
      setError("You must agree to the data processing.");
      return;
    }

    try {
      // 3) Отправка данных на Google Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          message,
        }),
      });

      const result = await response.json();
      if (result.result === "success") {
        // Успешно
        setSuccess(true);
        // Сброс полей
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
        setAgree(false);
      } else {
        // Ошибка от сервера
        setError("Submission failed. Please try again later.");
      }
    } catch (err) {
      setError("Error occurred while submitting. Please try again.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Заголовки секции */}
        <h2 className={styles.title}>Contact us</h2>
        <p className={styles.subtitle}>
          Get a free consultation on relocating your business to the Middle East
          <br/>and learn about special conditions
        </p>

        {/* Обёртка с формой */}
        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>Leave a request</h3>

          {/* Если есть ошибка, покажем блок */}
          {error && <div className={styles.errorMessage}>{error}</div>}

          {/* Если успешно отправлено, покажем блок */}
          {success && (
            <div className={styles.successMessage}>
              Your request has been submitted successfully!
            </div>
          )}

          <form className={styles.requestForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={styles.formGroupWide}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your business and relocation goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Чекбокс согласия */}
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree">
                I agree to the processing of my personal data
              </label>
            </div>

            {/* Кнопка отправки */}
            <button type="submit" className={styles.submitBtn}>
              Submit request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
