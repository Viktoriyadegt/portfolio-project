import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container.ts";
import {IconWrapper} from "../skills/Skills_Styles.ts";
import {S} from "./Testimony_Styles.ts"
import React from "react";


export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexContainer direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>
                    <Slider/>
                </FlexContainer>
            </Container>
        </S.Testimony>
    );
};



