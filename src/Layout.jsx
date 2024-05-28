import React from 'react'
import {Outlet}  from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Sidebar from './components/Sidebar/Sidebar';


function Layout() {
  return (
        <div className="flex">
          <Sidebar />
          <div className="p-7">
            <Outlet />
          </div>
        </div>
  )
}

export default Layout