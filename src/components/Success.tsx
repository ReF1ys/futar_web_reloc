"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Success.module.css";


const slides = [
  {
    id: 1,
    name: "Olga Sokolova",
    position: "CEO, TechSolutions Inc.",
    industry: "IT and software",
    text: `Relocation to Doha opened up new horizons for our media agency. 
           Qatar's investments in creative industries and international projects 
           allowed us to attract talented specialists and expand our portfolio of premium clients.`,
    image: "", 
  },
  {
    id: 2,
    name: "John Doe",
    position: "Founder, FinTech Solutions",
    industry: "Finance",
    text: `Expanding to the Middle East was a game-changer for our startup. 
           The region’s favorable regulations and modern infrastructure helped us 
           launch new financial products and attract global investors.`,
    image: "", 
  },
];

export default function SuccessStory() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className={styles.successStorySection}>
      <div className={styles.container}>
        {/* Заголовки */}
        <h2 className={styles.title}>Success story</h2>
        <p className={styles.subtitle}>
          <span>Learn how companies from different industries have successfully</span>
          <span>relocated their businesses to the Middle East and achieved</span>
          <span>significant growth</span>
        </p>

        {/* Блок с отзывом и "аватаром" */}
        <div className={styles.testimonialWrapper}>
          {/* Левый круг (аватар) */}
          {activeSlide.image ? (
            <Image
              src={activeSlide.image}
              alt={activeSlide.name}
              width={100}
              height={100}
              className={styles.avatarImage}
            />
          ) : (
            <div className={styles.avatarPlaceholder}></div>
          )}

          {/* Текстовая часть отзыва */}
          <div className={styles.testimonialContent}>
            <h3 className={styles.personName}>{activeSlide.name}</h3>
            <p className={styles.position}>{activeSlide.position}</p>
            <p className={styles.industry}>Industry: {activeSlide.industry}</p>
            <p className={styles.mainText}>{activeSlide.text}</p>
          </div>
        </div>

        {/* Управление слайдером: стрелки и точки */}
        <div className={styles.sliderNav}>
          <button className={styles.navArrow} onClick={goToPrevSlide}>
            &lt;
          </button>

          <div className={styles.dots}>
            {slides.map((slide, idx) => (
              <span
                key={slide.id}
                onClick={() => handleDotClick(idx)}
                className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ""}`}
              />
            ))}
          </div>

          <button className={styles.navArrow} onClick={goToNextSlide}>
            &gt;
          </button>
        </div>
      </div>

      {/* Блок "Key success indicators" */}
      <div className={styles.container}>
        <h2 className={styles.keyTitle}>Key success indicators</h2>
        <div className={styles.indicatorsRow}>
          <div className={styles.indicatorBox}>
            <h3>85%</h3>
            <p>
              Companies report profit growth in the first year after relocation
            </p>
          </div>
          <div className={styles.indicatorBox}>
            <h3>40%</h3>
            <p>
              Reduction of administrative costs due to optimization of business processes
            </p>
          </div>
          <div className={styles.indicatorBox}>
            <h3>3x</h3>
            <p>
              Expanding the customer base through access to new regional markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
