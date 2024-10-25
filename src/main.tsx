import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { QueryProvider } from './providers/QueryProvider.tsx'
import { App } from './App.tsx'
import { MantineThemeProvider } from './providers/MantineProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <MantineThemeProvider>
      <App/>
      </MantineThemeProvider>
    </QueryProvider>
  </StrictMode>,
)
