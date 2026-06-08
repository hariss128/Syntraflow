import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')

  const isAuthPage =
    req.nextUrl.pathname.startsWith('/login')

  const isDashboard =
    req.nextUrl.pathname.startsWith('/dashboard')

  // Protect dashboard
  if (isDashboard && !token) {
    return NextResponse.redirect(
      new URL('/login', req.url)
    )
  }

  // Prevent logged-in user from visiting login
  if (isAuthPage && token) {
    return NextResponse.redirect(
      new URL('/dashboard', req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}