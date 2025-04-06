import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import social from '../../../assets/images/progimg.webp'
import timer from '../../../assets/images/progimg2.webp'
import {Menu} from "../../../components/menu/Menu";

const worksItems: Array<String> = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu items={worksItems}/>
            <FlexContainer justify={'space-around'}>
                <Work src={social} title={'Social Network'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work src={timer} title={'Timer'}
                      text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
            </FlexContainer>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: rgba(213, 152, 172, 0.77);
    min-height: 100vh;
`