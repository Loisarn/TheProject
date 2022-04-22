import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './app.css';
import Dropdown from './Dropdown';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };


    return (
        <>
        <nav className="navbar">
        <Link to='/home' className='navbar-logo'>Floppy</Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}
            />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <Link to='/car' className='nav-links' onClick={closeMobileMenu}>
                    Bilen <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to='/house' className='nav-links' onClick={closeMobileMenu}>
                    Huset <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
                <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Logga in
                </Link>
            </li>
        </ul>
        <Button />
        </nav>
        </>
    );
}

export default Navbar;