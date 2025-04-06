import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>

            <FlexContainer justify={'center'} wrap="wrap">
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

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: rgba(110, 164, 202, 0.76);
    min-height: 100vh;
    text-align: center;
`
