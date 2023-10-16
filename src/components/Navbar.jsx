import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [navShow, setNavShow] = useState(false)
    const toggleNavbar = () => {

        setNavShow(!navShow)
    }
   return (
    <div className='relative'>
        <div className='flex gap-10 justify-between items-center bg-gray-500 p-5 text-white shadow-lg'>
            <Link to="/">Finance Tracker</Link>
            <ul className="md:flex gap-5 hidden">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/">Register</Link>
                </li>
            </ul>
            <div className="md:hidden block ">
                <button onClick={toggleNavbar} className=""><h1>{navShow ? "X" : "O"}</h1></button>  
            </div>
        </div>

        <div className='relative'>
            <ul className={navShow ? "flex flex-col gap-5 absolute right-10 top-5": "hidden"}>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar