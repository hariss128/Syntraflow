import styles from "./FeedbackSection.module.css";

export default function FeedbackSection() {
  return (
    <section className={styles.section}>
      <div className={styles.leftPane}>
        <h2 className={styles.title}>Continuous feedback to fuel constant growth</h2>
        <p className={styles.description}>
          Build the culture you want with instant feedback. Whether it&apos;s candid
          words or timely kudos, make feedback a real driver of performance and
          growth.
        </p>
        <a href="#" className={styles.cta}>
          Book a Demo →
        </a>
      </div>

      <div className={styles.rightPane}>
        <article className={`${styles.card} ${styles.backCard}`}>
          <div className={styles.rowTop}>
            <div className={styles.avatar} />
            <div>
              <p className={styles.name}>Sara Khan</p>
              <p className={styles.meta}>Quick feedback</p>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.lineShort} />
          <div className={styles.switchRow}>
            <div className={styles.switch} />
            <span>Share</span>
          </div>
        </article>

        <article className={`${styles.card} ${styles.frontCard}`}>
          <div className={styles.rowTop}>
            <div className={styles.avatar} />
            <div>
              <p className={styles.name}>Silvana Lopez</p>
              <p className={styles.meta}>Continuous feedback</p>
            </div>
            <span className={styles.tag}>Growth</span>
          </div>
          <div className={styles.line} />
          <div className={styles.lineShort} />
          <div className={styles.switchRow}>
            <div className={styles.switch} />
            <span>Share</span>
          </div>
        </article>
      </div>
    </section>
  );
}
