import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import photo from '../../../assets/images/photojpg.webp'

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer justify="space-around" align="center">
                <div>
                    <StyledSpan>Hi There</StyledSpan>
                    <StyledTitle>I am Svetlana Dyablo</StyledTitle>
                    <StyledMainTitle>A Web Developer.</StyledMainTitle>
                </div>

                <StyledPhoto src={photo}></StyledPhoto>
            </FlexContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: rgba(230, 227, 168, 0.76);
    min-height: 100vh;

`

const StyledPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMainTitle = styled.h1`
    
`

const StyledTitle = styled.h2`
    
`

const StyledSpan = styled.span`
`
