import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This array contains all paths that require authentication
const protectedPaths = [
  '/services/oral-cancer',
  '/services/lung-cancer',
  '/services/cervical-cancer',
  '/services/skin-cancer',
]

export function middleware(request: NextRequest) {
  // Check if the requested path is protected
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath) {
    // Check for authentication token
    const token = request.cookies.get('auth-token')

    if (!token) {
      // Redirect to login page with return URL
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('returnUrl', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/services/:path*',
  ],
}

