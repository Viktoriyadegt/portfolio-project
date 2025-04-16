import {FlexContainer} from "../../../components/FlexContainer.ts";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Link} from "../../../components/Link.ts";
import {Button} from "../../../components/Button.ts";

const Works = styled.section`
    ${FlexContainer} {
        gap: 30px
    }
`

const Work = styled.div`
    position: relative;
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;


    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }

`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        right: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};

        &::before {
            height: 100%;
            width: 100%;
        }
    }

    &::before {
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        transition: ${theme.animations.transition};
        opacity:0
    }

    &:hover {
        
        &::before{
            opacity: 1;
        }
        
        ${Button}{
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${theme.media.tablet}{
        &::before{
            opacity: 1;
        }

        ${Button}{
            opacity: 1;
        }
    }

`

const StyledImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px;
`

const StiledTitle = styled.h3`

`
const StiledText = styled.p`
margin: 14px 0 16px;
`

export const S = {
    StiledText, StiledTitle, Description,
    Works,Work, ImageWrapper, StyledImage
}