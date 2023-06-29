import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.tsx'
import App2 from './App2.tsx'
import App3 from './App3.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
)
