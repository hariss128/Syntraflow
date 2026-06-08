import styles from "./DemoSection.module.css";

export default function DemoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.leftPane}>
        <p className={styles.intro}>Explore intelligent HR.</p>
        <h2 className={styles.title}>Our team is here to help.</h2>
      </div>

      <div className={styles.rightPane}>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          aria-label="Email"
        />
        <button type="button" className={styles.button}>
          Book demo
        </button>
      </div>
    </section>
  );
}
