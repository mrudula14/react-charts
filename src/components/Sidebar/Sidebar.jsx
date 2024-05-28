import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Sidebar() {
  return (
      <div className="w-64 bg-blue-800 h-screen px-4 py-2">
          <nav className="mt-3 text-white font-bold">
              <div className="mb-2 rounded">
                  <Link to="/" className="flex items-center">
                      {/* <img
                          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                          className="mr-3 h-12"
                          alt="Logo"
                      /> */}
                  </Link>
                 
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="mt-3 text-white font-bold">
                          <li>
                              <NavLink
                              to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700': 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700': 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                          </li>
                          
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  );
}

export default Sidebar