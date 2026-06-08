import Image from "next/image";
import styles from "./IndustrySection.module.css";

const industries = [
  {
    heading: "Retail",
    image: "/Rectangle-202.webp",
    alt: "Retail industry workforce management",
  },
  {
    heading: "Healthcare",
    image: "/Rectangle-201.webp",
    alt: "Healthcare industry workforce management",
  },
  {
    heading: "Manufacturing",
    image: "/Rectangle-200.webp",
    alt: "Manufacturing industry workforce management",
  },
];

export default function IndustrySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>For every industry, including yours</h2>
      <p className={styles.description}>
        From frontline teams to corporate offices, SyntraFlow adapts to the way
        your organization works — no matter the sector.
      </p>
      <div className={styles.industryGrid}>
        {industries.map((industry) => (
          <article key={industry.heading} className={styles.industryCard}>
            <div className={styles.imageWrap}>
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                sizes="(max-width: 900px) 100vw, 360px"
                className={styles.image}
              />
              <h3 className={styles.cardHeading}>{industry.heading}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
