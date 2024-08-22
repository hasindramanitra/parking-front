import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ParkingServices from './pages/ParkingServices.jsx'
import Locations from './pages/Locations.jsx'
import Contact from './pages/Contact.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/parking-services",
    element: <ParkingServices/>
  },
  {
    path: "/locations",
    element: <Locations/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
