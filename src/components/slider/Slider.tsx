import styled from "styled-components";
import {FlexContainer} from '../FlexContainer';
import {theme} from "../../styles/Theme.ts";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexContainer align="center">
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexContainer>

            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Slide = styled.div`
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 15px 0 35px;
    display: inline-block;

`

const Pagination = styled.div`

    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            width: 20px;
         background-color: ${theme.colors.accent};

        }

    }

`