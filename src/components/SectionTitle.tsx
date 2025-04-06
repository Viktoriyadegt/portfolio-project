import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    
    position: relative;

    &::before {
        display: inline-block;
        content: '';
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
    }
`