import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'

import Route from './route/index';
import ErrorBoundary from './layouts/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Route />
    </ErrorBoundary>
  </StrictMode>,
)
