import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexContainer justify={'space-between'} wrap="wrap">
                    <Skill iconId={'html'}
                           title={'HTML5'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    />
                    <Skill iconId={'css'}
                           title={'CSS3'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}

                    />
                    <Skill iconId={'react'}
                           title={'REACT'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    />
                    <Skill iconId={'ts'}
                           title={'TYPESCRIPT'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    />
                    <Skill iconId={'sts'}
                           title={'STYLED COMPONENTS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    />
                    <Skill iconId={'figma'}
                           title={'WEB DESIGN'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    />

                </FlexContainer>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
