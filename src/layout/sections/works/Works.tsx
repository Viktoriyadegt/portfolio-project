import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Work} from "./work/Work";
import social from '../../../assets/images/progimg.webp'
import timer from '../../../assets/images/progimg2.webp'
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Container} from "../../../components/Container.ts";
import React, {useState} from "react";
import {S} from "./Works_Styles.ts"
import {AnimatePresence, motion} from "motion/react"

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
        type: 'spa',
        id: 1
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react',
        id: 2
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react',
        id: 3
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react',
        id: 4
    },
    {
        src: timer,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react',
        id: 5
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
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu filter={filter} tabsItems={tabsItems} changeFilter={changeFilter}/>
                <S.WorkWrapper>
                    <AnimatePresence>

                        {filteredItems.map((work) => {
                            return <motion.div
                                               layout
                                               key={work.id}
                                               initial={{opacity: 0}}
                                               animate={{opacity: 1}}
                                               exit={{opacity: 0}}
                            >
                                <Work key={work.id} src={work.src} title={work.title}
                                      text={work.text}/>
                            </motion.div>
                        })}

                    </AnimatePresence>
                    </S.WorkWrapper>
            </Container>
        </S.Works>
    );
};

