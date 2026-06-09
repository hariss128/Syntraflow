'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './auth.module.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Link from 'next/link'

const slides = [
  {
    image: '/Rectangle-202.webp',
    title: 'Scale Your Organization',
    description:
      'SyntraFlow helps HR teams manage payroll, attendance, and employee engagement in one unified platform.',
  },
  {
    image: '/Rectangle-201.webp',
    title: 'Streamline HR Operations',
    description:
      'Automate leave tracking, payroll processing, and compliance so your team can focus on people.',
  },
  {
    image: '/Rectangle-200.webp',
    title: 'Empower Your Workforce',
    description:
      'Give employees visibility into payslips, goals, and feedback while admins stay in control.',
  },
]

export default function AuthContainer() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        <div className={styles.formContainer}>
          <Link href="/">
          <Image
            src="/SyntraFlow-W400.png"
            alt="SyntraFlow logo"
            width={56}
            height={56}
            className={styles.logo}
          />
          </Link>
          <h1 className={styles.heading}>
            {mode === 'login' ? 'Welcome to Syntraflow!' : 'Create your account'}
          </h1>
          <p className={styles.subheading}>
            {mode === 'login'
              ? "Let's get you sign in and sign up to start your journey with Syntraflow."
              : 'Fill in your details below to get started with SyntraFlow.'}
          </p>

          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tab} ${mode === 'login' ? styles.tabActive : ''}`}
              onClick={() => setMode('login')}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`${styles.tab} ${mode === 'signup' ? styles.tabActive : ''}`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>

          {mode === 'login' ? <LoginForm /> : <SignupForm />}

          <p className={styles.footerBlurb}>
            Syntraflow is a modern HR platform built for growing teams. Manage
            payroll, track attendance, and keep your workforce engaged — all in
            one place.
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.slideshow}>
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`${styles.slide} ${index === activeSlide ? styles.slideActive : ''}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="50vw"
                className={styles.slideImage}
                priority={index === 0}
              />
              <div className={styles.slideOverlay}>
                <div className={styles.slideIndicators}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`${styles.indicator} ${i === activeSlide ? styles.indicatorActive : ''}`}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
