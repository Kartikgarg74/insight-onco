export function isAuthenticated(): boolean {
    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return false
    }

    // Check for auth token in cookies
    const cookies = document.cookie.split(';')
    return cookies.some(cookie => cookie.trim().startsWith('auth-token='))
  }

