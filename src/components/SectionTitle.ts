import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({weight:600, Fmin:30, Fmax:36, family:`Josefin Sans, sans-serif`})}
    text-align: center;
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
        
        @media ${theme.media.mobile}{
            bottom: -24px;
        }
    }
`