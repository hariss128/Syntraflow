"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Footer.module.css";

const footerLinks = {
  company: [{ label: "Talk to Sales", href: "#" }],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies Policy", href: "#" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  support: [{ label: "FAQ's", href: "#" }],
  contact: [
    { label: "info@syntraflow.io", href: "mailto:info@syntraflow.io" },
    { label: "support@syntraflow.io", href: "mailto:support@syntraflow.io" },
  ],
};

export default function Footer() {
  const [showChat, setShowChat] = useState(true);

  return (
    <>
      <footer className={styles.pageFooter}>
        <div className={styles.petalBg} aria-hidden="true">
          <span className={styles.petal} />
          <span className={styles.petal} />
          <span className={styles.petal} />
          <span className={styles.petal} />
          <span className={styles.petal} />
        </div>

        <div className={styles.inner}>
          <div className={styles.topRow}>
            <div className={styles.brandBlock}>
              <Image
                src="/SyntraFlow-W400.png"
                alt="SyntraFlow logo"
                width={80}
                height={80}
                className={styles.brandLogo}
              />
              <p className={styles.tagline}>Drives Success Through People.</p>
            </div>

            <div className={styles.linkGrid}>
              <div className={styles.linkColumn}>
                <h3 className={styles.columnHeading}>Company</h3>
                <ul className={styles.linkList}>
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h3 className={styles.columnHeading}>Legal</h3>
                <ul className={styles.linkList}>
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h3 className={styles.columnHeading}>Connect</h3>
                <ul className={styles.linkList}>
                  {footerLinks.socials.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h3 className={styles.columnHeading}>Support</h3>
                <ul className={styles.linkList}>
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkColumn}>
                <h3 className={styles.columnHeading}>Connect</h3>
                <ul className={styles.linkList}>
                  {footerLinks.contact.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className={styles.copyright}>
            © SyntraFlow {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>

      <div className={styles.chatWidget}>
        {showChat && (
          <div className={styles.chatPopup}>
            <button
              type="button"
              className={styles.chatClose}
              onClick={() => setShowChat(false)}
              aria-label="Close chat popup"
            >
              ✕
            </button>
            <div className={styles.chatAvatar} />
            <div>
              <p className={styles.chatTitle}>Need help?</p>
              <p className={styles.chatMessage}>
                Our staff are always ready to help!
              </p>
            </div>
          </div>
        )}
        <button type="button" className={styles.chatButton} aria-label="Open chat">
          <span className={styles.chatIcon}>💬</span>
        </button>
      </div>
    </>
  );
}
