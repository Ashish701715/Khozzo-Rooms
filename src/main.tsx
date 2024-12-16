import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'
import Route from './route/index';
import ErrorBoundary from './layouts/ErrorBoundary';
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer)


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <NextUIProvider>
        <ErrorBoundary>
          <Route />
        </ErrorBoundary>
      </NextUIProvider>
    </StrictMode>
  </Provider>,
)
