import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/blog' activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to='/loancalc' activeStyle>
                        Calculator
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
