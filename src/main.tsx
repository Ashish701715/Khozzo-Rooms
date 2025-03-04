import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'
import Route from './route/index';

import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux';
import rootReducer from './reducers/store'
import "/src/assets/style/globalScroll.css";

createRoot(document.getElementById('root')!).render(
  <Provider store={rootReducer}>
    <StrictMode>
      <NextUIProvider>
   
          <Route />
      
      </NextUIProvider>
    </StrictMode>
  </Provider>,
)
