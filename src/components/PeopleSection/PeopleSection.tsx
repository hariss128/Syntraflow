"use client";

import { useMemo, useState } from "react";
import styles from "./PeopleSection.module.css";

type EmployeeCard = {
  name: string;
  role: string;
  goals: number;
};

const employeeCards: EmployeeCard[] = [
  { name: "Alex Carter", role: "Senior Manager", goals: 78 },
  { name: "Emma Davis", role: "HR Executive", goals: 86 },
  { name: "Sophie Lee", role: "Operation Manager", goals: 100 },
];

export default function PeopleSection() {
  const [centerIndex, setCenterIndex] = useState(1);

  const leftIndex = (centerIndex + 1) % employeeCards.length;
  const rightIndex = (centerIndex - 1 + employeeCards.length) % employeeCards.length;
   

  const displayCards = useMemo(
    () => [
      { index: leftIndex, position: "left" as const },
      { index: centerIndex, position: "center" as const },
      { index: rightIndex, position: "right" as const },
    ],
    [leftIndex, centerIndex, rightIndex],
  );

  const rotateLeft = () =>
    setCenterIndex((prev) => (prev + 1) % employeeCards.length);

  const rotateRight = () =>
    setCenterIndex((prev) => (prev - 1 + employeeCards.length) % employeeCards.length);

  return (
    <section className={styles.section}>
      <div className={styles.cardsPane}>
        {displayCards.map(({ index, position }) => {
          const card = employeeCards[index];
          const isSide = position !== "center";
          return (
            <button
              key={`${card.name}-${position}`}
              type="button"
              className={`${styles.card} ${styles[position]}`}
              onClick={position === "left" ? rotateRight : position === "right" ? rotateLeft : undefined}
              disabled={!isSide}
              aria-label={
                position === "left"
                  ? "Show previous card"
                  : position === "right"
                    ? "Show next card"
                    : "Active card"
              }
            >
              <div className={styles.avatar} />
              <p className={styles.role}>{card.role}</p>
              <div className={styles.progressRow}>
                <span>Goals</span>
                <span>{card.goals}%</span>
              </div>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${card.goals}%` }}
                />
              </div>
              <span className={styles.badge}>Outstanding</span>
            </button>
          );
        })}
      </div>

      <div className={styles.contentPane}>
        <h2 className={styles.title}>The best from your people, every day</h2>
        <p className={styles.description}>
          Help employees excel from day one with aligned goals. Set clear paths,
          track progress and empower managers to have the right conversations.
        </p>
        <a href="#" className={styles.cta}>
          Book a Demo →
        </a>
      </div>
    </section>
  );
}
