import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import photo from '../../../assets/images/progimg3.webp'
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer justify="space-around" align="center" wrap={'wrap'}>
                    <TextContainer>
                        <StyledSpan>Hi There</StyledSpan>
                        <StyledTitle>I am <span>Victoria Degtyareva</span></StyledTitle>
                        <StyledMainTitle>A Web Developer</StyledMainTitle>
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
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const StyledMainTitle = styled.h1`
    ${Font({Fmin: 20, Fmax: 27})}
`

const StyledTitle = styled.h2`
    ${Font({family: `'Josefin Sans', sans-serif`, Fmin: 30, Fmax: 50, weight: 700})}
    letter-spacing: 0.05em;
    margin: 10px 0;
    text-align: start;

    span {
        position: relative;
        z-index: 0;
        display: block;
        white-space: nowrap;


        &::before {
            content: '';
            display: inline-block;
            height: 20px;
            width: 100%;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            transform: translateY(3px);
            z-index: -1;

            @media ${theme.media.mobile} {
                margin: 15px 0 22px;
                transform: translateY(30px);
            }

        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
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


        @media ${theme.media.mobile} {
            width: 331px;
            height: 414px;
            top: -17px;
            left: 12px;
        }
    }

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`


