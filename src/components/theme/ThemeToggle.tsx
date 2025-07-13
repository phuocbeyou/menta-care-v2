import { Button, useColorScheme } from '@mui/material'
import React from 'react'

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme()

  React.useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return <Button onClick={toggleTheme}>{mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</Button>
}

export default ThemeToggle
