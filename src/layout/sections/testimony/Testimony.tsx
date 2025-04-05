import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";


export const Testimony = () => {
    return (
        <StiledTestimony>

            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={'column'} align={'center'}>
                <Icon iconId={'quote'}/>
                <Slider/>
            </FlexContainer>

        </StiledTestimony>
    );
};

const StiledTestimony = styled.section`
    background-color: rgba(169, 152, 213, 0.77);
    min-height: 50vh;
`