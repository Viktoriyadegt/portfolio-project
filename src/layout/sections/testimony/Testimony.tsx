import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";
import {IconWrapper} from "../skills/skill/Skill.tsx";


export const Testimony = () => {
    return (
        <StiledTestimony>

            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>
                <Slider/>
            </FlexContainer>

        </StiledTestimony>
    );
};

const StiledTestimony = styled.section`
    background-color: rgba(169, 152, 213, 0.77);
    min-height: 50vh;

    ${IconWrapper} {
        margin: 40px 0 60px;
    }
`