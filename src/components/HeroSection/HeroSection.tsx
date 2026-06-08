import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const logos = [
    { src: "/247.png", alt: "247 logo" },
    { src: "/c2o.png", alt: "c2o logo" },
    { src: "/Layer_1-4.png", alt: "Layer 1 logo" },
    { src: "/Layer_1-5.png", alt: "Layer 1 secondary logo" },
  ];

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.leftSide}>
          <h1 className={styles.headline}>
            <span className={styles.boldText}>Streamline </span>
            <span className={styles.highlightText}>Your HR Operations</span>
            <span className={styles.subHeadline}>
              with One Powerful Solution.
            </span>
          </h1>

          <div className={styles.halfLine} />

          <p className={styles.description}>
            Effortlessly manage payroll, track employees, and ensure compliance
            all in one platform.
          </p>

          <button type="button" className={styles.tourButton}>
            Take a Tour
          </button>
        </div>

        <div className={styles.rightSide}>
          <Image
            src="/Group-192-1280x928.png"
            alt="HR dashboard preview"
            width={640}
            height={464}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <section className={styles.trustedSection}>
        <p className={styles.trustedText}>Trusted over 1,999 companies</p>
        <div className={styles.logoTicker}>
          <div className={styles.logoTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.src}-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={44}
                  className={styles.companyLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
