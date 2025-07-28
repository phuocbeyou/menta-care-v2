import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface User {
  id: string
  email?: string
  phone?: string
  name?: string
  avatar?: string
  role?: string
}

interface AuthState {
  // State
  token: string | null
  refreshToken: string | null
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean

  // Actions
  setToken: (token: string, refreshToken?: string) => void
  setUser: (user: User) => void
  login: (token: string, user: User, refreshToken?: string) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  clearAuth: () => void
  updateUser: (userData: Partial<User>) => void
}

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
  isLoading: false
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Set token
      setToken: (token: string, refreshToken?: string) => {
        set({
          token,
          refreshToken: refreshToken || get().refreshToken,
          isAuthenticated: !!token
        })
      },

      // Set user
      setUser: (user: User) => {
        set({ user })
      },

      // Login - set token và user cùng lúc
      login: (token: string, user: User, refreshToken?: string) => {
        set({
          token,
          refreshToken,
          user,
          isAuthenticated: true,
          isLoading: false
        })
      },

      // Logout
      logout: () => {
        set({
          ...initialState
        })
      },

      // Set loading state
      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },

      // Clear all auth data
      clearAuth: () => {
        set({
          ...initialState
        })
      },

      // Update user info
      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData }
          })
        }
      }
    }),
    {
      name: 'auth-storage', // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        refreshToken: state.refreshToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated
        // Không persist isLoading
      })
    }
  )
)

// Selectors để dễ sử dụng
export const useToken = () => useAuthStore((state) => state.token)
export const useUser = () => useAuthStore((state) => state.user)
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated)
export const useIsLoading = () => useAuthStore((state) => state.isLoading)

// Auth actions
export const useAuthActions = () =>
  useAuthStore((state) => ({
    setToken: state.setToken,
    setUser: state.setUser,
    login: state.login,
    logout: state.logout,
    setLoading: state.setLoading,
    clearAuth: state.clearAuth,
    updateUser: state.updateUser
  }))
