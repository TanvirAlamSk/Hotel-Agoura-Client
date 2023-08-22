import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-blue-950 mr-8 lg:mr-0 lg:px-20 ">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="menu menu-sm btn btn-ghost lg:hidden z-[1]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-blue-950 rounded-box w-52">
                            <li className='text-whitehover:text-orange-400'><Link to="/" >Home</Link></li>
                            <li className='hover:text-orange-400'>
                                <Link to="/about" >ABOUT</Link>
                            </li>
                            <li className='hover:text-orange-400'><Link to="/service" >SERVICES</Link></li>
                            <li className='hover:text-orange-400'><Link to="/rooms">ROOMS</Link></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary className='hover:text-orange-400'>PAGES</summary>
                                    <ul className="p-2">
                                        <li className='hover:text-orange-400'><Link to="" >Submenu 1</Link></li>
                                        <li className='hover:text-orange-400'><Link to="" >Submenu 2</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to="/contact" className='hover:text-orange-400'>CONTACT</Link></li>
                        </ul>
                    </div>
                    <h2 className="text-4xl font-bold normal-case text-orange-500">HOTEL AGOURA</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white ">
                        <li ><Link to="/" className='hover:text-orange-400'>HOME</Link></li>

                        <li>
                            <Link to="/about" className='hover:text-orange-400'>ABOUT</Link>
                        </li>
                        <li><Link to="/service" className='hover:text-orange-400'>SERVICES</Link></li>
                        <li ><Link to="/rooms" className='hover:text-orange-400'>ROOMS</Link></li>
                        <li tabIndex={0} className='droupdown'>
                            <details>
                                <summary className='hover:text-orange-400'>PAGES</summary>
                                <ul className="p-2 bg-blue-950  z-[1]">
                                    <li><Link to="" className='hover:text-orange-400'>Submenu 1</Link></li>
                                    <li><Link to="" className='hover:text-orange-400'>Submenu 2</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li ><Link to="/contact" className='hover:text-orange-400'>CONTACT</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <button onClick={logout} className='text-white font-semibold hover:text-orange-400 '><Link to="/login">LogOut</Link></button>
                        :
                        <button className='text-white font-semibold hover:text-orange-400 '><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;