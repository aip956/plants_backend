// Burger from https://www.youtube.com/watch?v=GGkBwpxV7AI
import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;

z-index: 20;
display: none;

@media (max-width: 768px) {
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
}

div {
    width: 2rem;
    height: .25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translate(0)'};
        opacity: ${({ open }) => open ? '0' : '1'};
    }
    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'}; 
    }
}
`;

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <> 
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger