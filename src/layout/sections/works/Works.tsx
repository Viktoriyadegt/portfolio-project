import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import social from '../../../assets/images/progimg.webp'
import timer from '../../../assets/images/progimg2.webp'
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Container} from "../../../components/Container";

const worksItems: string[] = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksItems}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work src={social} title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work src={timer} title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </FlexContainer>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexContainer}{
      gap:30px
  }
`