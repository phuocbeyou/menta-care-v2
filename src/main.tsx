import ReactDOM from 'react-dom/client'
import { Suspense, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
      refetchOnReconnect: false
    }
  }
})

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
