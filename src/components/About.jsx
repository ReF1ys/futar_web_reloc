import Head from 'next/head';
import styles from "@/styles/About.module.css";

export default function Home() {
  return (
    <div id="about" className={styles.container}>
      <Head>
        <title>Business Relocations</title>
        <meta name="description" content="About business relocations in the Middle East" />
      </Head>

      {/* Секция «About business relocations» */}
      <section className={styles.introSection}>
        <h1>About business relocations</h1>
        <p>
          The Middle East offers unique opportunities for companies <br/>looking to
          expand and innovate in a supportive <br/>business environment
        </p>
      </section>

      {/* Четыре карточки с преимуществами */}
      <section className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <div className={styles.iconCircle}>
            <img src="/svg/Class.svg" alt="Infrastructure Icon" />
          </div>
          <h3>World class infrastructure</h3>
          <p>
            Modern business centers, technology parks and advanced digital
            infrastructure for businesses of any scale.
          </p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.iconCircle}>
            <img src="/svg/Econom.svg" alt="Growth Icon" />
          </div>
          <h3>Economic growth</h3>
          <p>
            The region's stable economic growth and significant investments in
            innovation create a favorable environment for business
          </p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.iconCircle}>
            <img src="/svg/Tax.svg" alt="Tax Icon" />
          </div>
          <h3>Tax advantages</h3>
          <p>
            Favorable tax conditions and special economic zones with simplified
            regulations and benefits
          </p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.iconCircle}>
            <img src="/svg/globe.svg" alt="Location Icon" />
          </div>
          <h3>Strategic location</h3>
          <p>
            Ideal geographical position for access to the markets of Europe,
            Asia and Africa with developed logistics
          </p>
        </div>
      </section>

      {/* Секция «Why Business Chooses the Middle East» */}
      <section className={styles.whySection}>
        <h2>Why Business Chooses the Middle East</h2>
        <p>
          In recent years, the region has become a hub for innovation and
          international commerce, attracting companies from around the world
          due to its strategic advantages
        </p>
        <ul>
          <li>Policy of active attraction of international business and investment</li>
          <li>Developed ecosystem for startups and innovative projects</li>
          <li>Access to qualified specialists and international talent</li>
          <li>High standard of living and safety for company employees</li>
        </ul>
      </section>
    </div>
  );
}