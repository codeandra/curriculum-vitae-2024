import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import './assets/css/tailwind.css'
import './assets/css/fontPoppins.css'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
