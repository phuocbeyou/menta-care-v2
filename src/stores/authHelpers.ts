import { useAuthStore } from './authStore'

/**
 * Helper để get token từ store
 */
export const getAuthToken = (): string | null => {
  return useAuthStore.getState().token
}

/**
 * Helper để get user từ store
 */
export const getCurrentUser = () => {
  return useAuthStore.getState().user
}

/**
 * Helper để check authentication status
 */
export const isUserAuthenticated = (): boolean => {
  const { token, isAuthenticated } = useAuthStore.getState()
  return isAuthenticated && !!token
}

/**
 * Helper để tạo Authorization header
 */
export const getAuthHeaders = () => {
  const token = getAuthToken()

  if (!token) {
    return {}
  }

  return {
    Authorization: `Bearer ${token}`
  }
}

/**
 * Helper để tạo API config với auth header
 */
export const createAuthenticatedConfig = (config: any = {}) => {
  const authHeaders = getAuthHeaders()

  return {
    ...config,
    headers: {
      ...config.headers,
      ...authHeaders
    }
  }
}

/**
 * Helper để handle logout khi token expired
 */
export const handleTokenExpired = () => {
  const { logout } = useAuthStore.getState()
  logout()

  // Redirect về login page
  window.location.href = '/auth'
}

/**
 * Helper để validate token format
 */
export const isValidToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') return false

  // Basic JWT format check
  const parts = token.split('.')
  return parts.length === 3
}

/**
 * Helper để parse JWT payload (không verify signature)
 */
export const parseJWTPayload = (token: string) => {
  try {
    if (!isValidToken(token)) return null

    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )

    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error parsing JWT:', error)
    return null
  }
}

/**
 * Helper để check token expiration
 */
export const isTokenExpired = (token: string): boolean => {
  const payload = parseJWTPayload(token)
  if (!payload || !payload.exp) return true

  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}

/**
 * Helper để auto logout khi token expired
 */
export const checkTokenExpiration = () => {
  const token = getAuthToken()

  if (token && isTokenExpired(token)) {
    handleTokenExpired()
    return false
  }

  return true
}
