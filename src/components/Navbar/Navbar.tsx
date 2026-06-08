'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.topNavbar}>
      <div className={styles.navLeft}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <Image
            src="/SyntraFlow-W400.png"
            alt="SyntraFlow logo"
            width={120}
            height={120}
            className={styles.brandLogo}
            priority
          />
        </Link>

        <div className={styles.navLinks}>
          <button type="button" className={`${styles.btn} ${styles.btnLight}`}>
            Features Pricing
          </button>
        </div>
      </div>

      <div className={styles.navRight}>
        <Link href="/login" className={`${styles.btn} ${styles.btnLogin}`}>
          Login
        </Link>
        <button type="button" className={`${styles.btn} ${styles.btnOutline}`}>
          Talk to Sales
        </button>
      </div>

      <button
        type="button"
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            className={styles.menuBackdrop}
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <div className={styles.mobileMenu}>
            <Link
              href="/login"
              className={styles.mobileMenuLink}
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
        </>
      )}
    </nav>
  )
}
