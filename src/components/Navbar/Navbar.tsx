import Link from 'next/link'
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.topNavbar}>
      <div className={styles.navLeft}>
        <a className={styles.brand} href="/">
          <Image
            src="/SyntraFlow-W400.png"
            alt="SyntraFlow logo"
            width={120}
            height={120}
            className={styles.brandLogo}
            priority
          />
        </a>

        <div className={styles.navLinks}>
          <button type="button" className={`${styles.btn} ${styles.btnLight}`}>
            Features Pricing
          </button>
        </div>
      </div>

      <div className={styles.navRight}>
        <Link href="/login" type="button" className={`${styles.btn} ${styles.btnLogin}`}>
          Login
        </Link>
        <button type="button" className={`${styles.btn} ${styles.btnOutline}`}>
          Talk to Sales
        </button>
      </div>
    </nav>
  );
}
