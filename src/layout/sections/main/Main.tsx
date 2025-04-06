import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import photo from '../../../assets/images/progimg3.webp'
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <TextContainer>
                        <StyledSpan>Hi There</StyledSpan>
                        <StyledTitle>I am <span>Victoria Degtyareva</span></StyledTitle>
                        <StyledMainTitle>A Web Developer.</StyledMainTitle>
                    </TextContainer>
                    <PhotoWrapper>
                        <StyledPhoto src={photo}></StyledPhoto>
                    </PhotoWrapper>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: rgba(230, 227, 168, 0.76);
    min-height: 100vh;
    display: flex;
`

const StyledPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const StyledTitle = styled.h2`
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: '';
            display: inline-block;
            height: 20px;
            width: 100%;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const StyledSpan = styled.h2`
    font-weight: 400;
    font-size: 14px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        display: inline-block;
        height: 470px;
        width: 360px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        z-index: -1;
        top: -24px;
        left: 24px;
    }
`


