import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Menu = () => (
    <>
        <p><a href="/home">Home</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/contact">Contact</a></p>
        <p><a href="/blog">Blog</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gradient__bg">
            <div className="concept__navbar">
                <div className="concept__navbar-links">
                    <div className="concept__navbar-links_logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="concept__navbar-links_container">
                        <Menu />

                    </div>
                </div>
                <div className="concept__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign Up</button>
                </div>
                <div className="concept__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="concept__navbar-menu_container scale-up-center">
                            <div className="concept__navbar-menu_container-links">
                                <Menu />

                                <div className="concept__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign up</button>
                                </div>
                            </div>    
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar