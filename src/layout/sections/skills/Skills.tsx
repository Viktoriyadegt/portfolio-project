import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts"
import React from "react";


const SkillsState = [
    {
        iconId: 'html',
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'CSS3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'REACT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'ts',
        title: 'TYPESCRIPT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'sts',
        title: 'STYLED COMPONENTS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexContainer justify={'space-between'} wrap="wrap">

                    {SkillsState.map((skill, index) => {
                        return <Skill key={index} iconId={skill.iconId}
                                      title={skill.title}
                                      description={skill.description}
                        />
                    })}

                </FlexContainer>
            </Container>
        </S.Skills>
    );
};

