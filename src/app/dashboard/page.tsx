'use client'

export default function DashboardPage() {

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    })

    window.location.href = '/login'
  }

  const handleDelete = async () => {

    const confirmed = confirm(
      'Are you sure you want to delete your account?'
    )

    if (!confirmed) return

    await fetch('/api/auth/delete-account', {
      method: 'DELETE',
    })

    window.location.href = '/login'
  }

  return (
    <div
      style={{
        padding: '40px',
      }}
    >
      <h1>Dashboard</h1>

      <p>
        User logged in successfully 🎉
      </p>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <button onClick={handleLogout}>
          Logout
        </button>

        <button onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  )
}