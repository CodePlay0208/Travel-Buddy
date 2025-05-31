import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleOAuthProvider clientId="464876682696-pkm7moinvftntbnild9dq19378vu3ski.apps.googleusercontent.com">
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App className="app-class-name" />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
