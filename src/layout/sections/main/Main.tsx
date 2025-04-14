import photo from '../../../assets/images/progimg3.webp'
import {S} from "./Main_Styles.ts"
import {Container} from "../../../components/Container.ts";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import React from "react";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexContainer justify="space-around" align="center" wrap={'wrap'}>
                    <S.TextContainer>
                        <S.StyledSpan>Hi There</S.StyledSpan>
                        <S.StyledTitle>I am <span>Victoria Degtyareva</span></S.StyledTitle>
                        <S.StyledMainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                        </S.StyledMainTitle>
                    </S.TextContainer>
                    <S.PhotoWrapper>
                        <S.StyledPhoto src={photo}></S.StyledPhoto>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

