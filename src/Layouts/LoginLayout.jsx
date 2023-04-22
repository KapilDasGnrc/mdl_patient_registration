import React, { Children } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import logo from '../assets/gnrc-logo.svg';

function LoginLayout({ children }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-light">

        <div className='text-primary mr-5'>
          <img src={logo} alt="logo" width={60} height={60} />
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registration">Registration</Link>
          </li>
        </ul>

      </nav>
      {children}
    </div>
  )
}

export default LoginLayout