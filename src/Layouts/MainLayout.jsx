import React, { Children } from 'react'
import NavBar from '../Components/NavBar';
import logo from '../logo.svg';

function MainLayout({children}) {
  return (
    <div className="container">
        <NavBar logo={logo}></NavBar>
        {children}
    </div>
  )
}

export default MainLayout