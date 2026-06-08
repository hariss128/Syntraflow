import Image from "next/image";
import styles from "./ArchitectureSection.module.css";

const features = [
  { title: "Payroll\nManagement", icon: "/file.svg" },
  { title: "Employee\nTracking", icon: "/globe.svg" },
  { title: "Compliance\nManagement", icon: "/window.svg" },
  { title: "Leave\nManagement", icon: "/file.svg" },
  { title: "Performance\nAnalytics", icon: "/globe.svg" },
  { title: "Easy\nOnboarding", icon: "/window.svg" },
];

export default function ArchitectureSection() {
  return (
    <section className={styles.section}>
      <p className={styles.subTitle}>A Single, Unified Architecture For HR</p>
      <h2 className={styles.title}>The platform that grows with you</h2>

      <div className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <Image
              src={feature.icon}
              alt=""
              width={42}
              height={42}
              className={styles.icon}
            />
            <h3 className={styles.cardTitle}>
              {feature.title.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
