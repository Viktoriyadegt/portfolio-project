import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Work} from "./work/Work";
import social from '../../../assets/images/progimg.webp'
import timer from '../../../assets/images/progimg2.webp'
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./Works_Styles.ts"

const worksItems: string[] = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']

const WorksState = [
    {
        src: social,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksItems}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {WorksState.map((work, index) => {
                        return <Work key={index} src={work.src} title={work.title}
                                     text={work.text}/>
                    })}

                </FlexContainer>
            </Container>
        </S.Works>
    );
};

