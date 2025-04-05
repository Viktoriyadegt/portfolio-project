import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type Props = {
    items: Array<String>
}


export const HeaderMenu = ({items}: Props) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {items.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        <Mask><span>{item}</span></Mask>
                        <Mask><span>{item}</span></Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content:center;
    }
`



const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-size: 25px;
    font-weight: 400;
    
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: hidden;
    display: inline-block;
    height: 50%;
    color: ${theme.colors.accent};

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
    
    &::before{
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        

        position: absolute;
        top:45%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }
    
    

    &:hover {
        &::before{
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


