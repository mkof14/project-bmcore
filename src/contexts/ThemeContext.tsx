import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {}
})

type ThemeProviderProps = {
  children: ReactNode
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem('bmcore-theme')

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.add(theme)
    window.localStorage.setItem('bmcore-theme', theme)
  }, [theme])

  const value: ThemeContextValue = {
    theme,
    toggleTheme: () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
