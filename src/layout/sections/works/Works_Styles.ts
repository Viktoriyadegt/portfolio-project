import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.ts";
import {Link} from "../../../components/Link.ts";

const Works = styled.section`

`

const WorkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px 34px;
  align-items: stretch;
  position: relative;
  height: 100%;
`


const Work = styled.div`
    max-width: 375px;
    width: 100%;
    box-shadow: 2px 2px 70px 0 rgb(98, 66, 147);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;


    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const ImageWrapper = styled.div`
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const TextWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ProjectTitle = styled.h3`
  color: ${theme.colors.font};
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 17px;
`

const ProjectText = styled.p`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 12px;
  flex: 1 1 auto;
`


export const S = {
    Works,
    WorkWrapper,
    Work,
    ImageWrapper,
    Image,
    TextWrapper,
    ProjectTitle,
    ProjectText,

}