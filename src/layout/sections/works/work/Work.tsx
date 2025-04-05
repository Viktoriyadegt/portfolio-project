import React from 'react';
import styled from "styled-components";

type Props = {
    src: string
    title: string
    text:string
}

export const Work = ({src, title, text}:Props) => {
    return (
        <StyledWork>
            <StyledImage src={src} alt={title}/>
            <StiledTitle>{title}</StiledTitle>
            <StiledText>{text}</StiledText>
            <StyledLink href={'#'}>DEMO</StyledLink>
            <StyledLink href={'#'}>CODE</StyledLink>
        </StyledWork>

    );
};

const StyledWork = styled.div`
    background-color: rgba(242, 229, 244, 0.51);
    width: 100%;
    max-width: 540px;
`

const StyledImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const StiledTitle =  styled.h3`

`
const StiledText =  styled.p`

`

const StyledLink = styled.a`
`
