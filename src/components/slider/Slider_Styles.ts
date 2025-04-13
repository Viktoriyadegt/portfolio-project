import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Slide = styled.div`
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 23px 0 35px;
    display: inline-block;

`

const Pagination = styled.div`

    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            width: 20px;
         background-color: ${theme.colors.accent};

        }

    }

`

export const S = {
    Name, Pagination, Slide, Text, Slider
}