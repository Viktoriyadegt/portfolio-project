import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "react-scroll";

// desktopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content:center;
    }
`



// mobileMenu

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(31, 31, 32, 0.9);
    z-index: 99999;
    transform: translateY(-100%);
    transition: 1s ease-in-out;
   

   
    
    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: ${theme.animations.transition};
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
        
        & ul {
            gap: 30px;
        }
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    width: 200px;
    height: 200px;

    position: fixed;
    top: -100px;
    right: -100px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: translateY(0) rotate(-45deg);
        `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
                width: 36px;
        `}
        }
    }
`

// commonMenu


const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: hidden;
    display: inline-block;
    height: 50%;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    
`


const NavLink = styled(Link)`
    font-family: Josefin Sans, sans-serif;
    font-size: 25px;
    font-weight: 400;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};


        position: absolute;
        top: 45%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
        transition: ${theme.animations.transition};
    }


    &:hover, &.active {


        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }

`



export const S = {
    DesktopMenu,
    BurgerButton,
    MobileMenu,
    MobileMenuPopup,
    NavLink,
    ListItem,
    Mask
}
