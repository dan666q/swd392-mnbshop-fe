import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import QueryProvider from './lib/react-query/query-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux-toolkit/store.ts'
import '@/styles/index.css'
import '@/scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
