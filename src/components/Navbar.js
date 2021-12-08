import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activestyle='true'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activestyle='true'>
                        About
                    </NavLink>
                    <NavLink to='/blog' activestyle='true'>
                        Blog
                    </NavLink>
                    <NavLink to='/loancalc' activestyle='true'>
                        Calculator
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
