import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './index.scss'
import { TokenContextProvider} from './context/tokenContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenContextProvider>
     <App />
    </TokenContextProvider>
  </React.StrictMode>
)
