'use client'

import { useState } from 'react'
import styles from './auth.module.css'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      setLoading(true)

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message)
        return
      }

      // Save token (temporary approach)
      localStorage.setItem('token', data.token)

      // Redirect to dashboard
      window.location.href = '/dashboard'
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="login-email">
          Email Address <span className={styles.required}>*</span>
        </label>
        <input
          id="login-email"
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="login-password">
          Password <span className={styles.required}>*</span>
        </label>
        <input
          id="login-password"
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <a href="#" className={styles.forgotLink}>
        Forgot Password?
      </a>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}