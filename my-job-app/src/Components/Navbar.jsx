import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {path : "/", title : "Search Jobs"},
        {path : "/my-jobs", title : "My Jobs"},
        {path : "/salary", title : "Salary"},
        {path : "/post-job", title : "Post A Job"}
    ]

  return (

            <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
                <nav className='flex justify-between items-center py-6'>
                    {/* Container for Logo and Nav Items */}
                        {/* Logo and Name */}
                        <a href="/" className="flex text-4xl items-center font-bold font-serif text-primary">
                            <span>JobBort</span>
                        </a>

                        {/* Nav items for larger devices */}
                        <ul className="hidden md:flex gap-12 items-center">
                            {navItems.map(({ path, title }) => (
                            <li key={path} className="text-base text-primary    ">
                                <NavLink
                                to={path}
                                className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                {title}
                                </NavLink>
                            </li>
                            ))}
                        </ul>

                    {/* sign up and login btn */}
                    <div className='text-base text-primary font-medium space-x-5 lg-block hidden md:flex'>
                        <Link to="/login" className='py-2 px-5 border rounded'>Login</Link>
                        <Link to="/sign up" className='py-2 px-5 border rounded bg-blue text-white'>Sign Up</Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className='md:hidden block'>
                        <button onClick={handleMenuToggler}>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBars className='w-5 h-5 text-primary'/> 
                            }
                        </button>
                    </div>
                </nav>
                {/* Mobile View for Navitems*/}
                <div className={`md:hidden px-4 bg-slate-100 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                        <ul>
                        {navItems.map(({ path, title }) => (
                            <li key={path} className="text-base text-primary py-1">
                                <NavLink
                                to={path}
                                className={({ isActive }) => (isActive ? "active" : "")}
                                >
                                {title}
                                </NavLink>
                            </li>
                            ))}

                            <li className='py-1'><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
            </header>

  )
}

export default NavBar