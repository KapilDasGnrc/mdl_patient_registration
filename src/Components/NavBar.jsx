import React from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../Context/AuthContext'


function NavBar({ logo }) {
    const { logout } = useAuthContext();

    return (
        <nav className="navbar navbar-expand-sm bg-primary text-white">

            <div className='text-light mr-5'>
                <img src={logo} alt="logo" width={60} height={60} />
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/contacts">Contact List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" onClick={logout} >Logout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar

