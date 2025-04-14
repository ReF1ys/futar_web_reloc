"use client";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Expand. Relocate. <br />Thrive.</h1>
        <p className={styles.subtitle}>
          We help businesses relocate smoothly to the world’s best destinations.
          <br />
          Legal, financial, and operational support.
        </p>
        <div className={styles.contprev}>
          <div className={styles.prev}>
            <h1 className={styles.prevText}>
              «We simplify global expansion»
            </h1>
            <p className={styles.prevSub}>
              Our team ensures a smooth <br />transition for businesses worldwide
            </p>
          </div>
          <div className={styles.prev}>
            <h1 className={styles.prevText}>
              «Your success is our priority»
            </h1>
            <p className={styles.prevSub}>
              From legal setup to operational <br />support, We&apos;ve got you covered
            </p>
          </div>
        </div>
        <button className={styles.ctaButton} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>Let&rsquo;s<br /> Go</span>
        </button>
      </div>
    </section>
  );
}
