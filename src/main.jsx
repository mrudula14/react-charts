import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/react-charts" element={<Layout />}>
      <Route path="/react-charts"  element={<Home />}/>
      <Route path="/react-charts/about"  element={<About />}/>
    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
