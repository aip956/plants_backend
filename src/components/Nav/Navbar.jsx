// Burger from https://www.youtube.com/watch?v=GGkBwpxV7AI
import React from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';
import Burger from './Burger';

const Nav = styled.nav`
width: 100%;
height: 65px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;   
`

const Navbar = () => {
    return (
        <Nav>
            <Burger />
        </Nav>
    )
}

export default Navbar