"use client";
import styles from "@/styles/Success.module.css";


export default function SuccessStory() {
  return (
    <section className={styles.successStorySection}>
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
