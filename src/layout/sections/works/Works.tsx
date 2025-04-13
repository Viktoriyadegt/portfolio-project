import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {Work} from "./work/Work";
import social from '../../../assets/images/progimg.webp'
import timer from '../../../assets/images/progimg2.webp'
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Container} from "../../../components/Container.ts";
import React, {useState} from "react";
import {S} from "./Works_Styles.ts"

export type StatusType = 'all' | 'LANDING' | 'react' | 'spa'

const tabsItems: Array<{ title: string, status: StatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'LANDING PAGE',
        status: 'LANDING'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
    {
        title: 'REACT',
        status: 'react'
    },
]

const worksState = [
    {
        src: social,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa'
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react'
    }
]

export const Works: React.FC = () => {

    const [filter, setFilter] = useState<StatusType>('all')

    let filteredItems

    if (filter === 'all') {
        filteredItems = worksState
    } else {
        filteredItems = worksState.filter((item) => item.type === filter)
    }

    const changeFilter = (value: StatusType) => {
        setFilter(value)
    }


    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu filter={filter} tabsItems={tabsItems} changeFilter={changeFilter}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {filteredItems.map((work, index) => {
                        return <Work key={index} src={work.src} title={work.title}
                                     text={work.text}/>
                    })}

                </FlexContainer>
            </Container>
        </S.Works>
    );
};

