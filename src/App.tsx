import '@src/global.css'
import { Router } from '@routes/sections'
import { useScrollToTop } from '@hooks/use-scroll-to-top'
import { ThemeProvider } from '@theme/theme-provider'
import { ErrorProvider } from '@components/error-dialog'

export default function App() {
  useScrollToTop()

  return (
    <ThemeProvider>
      <ErrorProvider>
        <Router />
      </ErrorProvider>
    </ThemeProvider>
  )
}
