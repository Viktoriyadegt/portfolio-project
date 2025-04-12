import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer.tsx";
import {theme} from "../../../../styles/Theme.ts";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({iconId, title, description}: Props) => {
    return (
        <StyledSkill>
            <FlexContainer align={'center'} direction={'column'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>

                <StiledSkillTitle>{title}</StiledSkillTitle>
                <StiledSkillText>{description}</StiledSkillText>
            </FlexContainer>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 45px 20px 56px;

    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`
const StiledSkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const StiledSkillText = styled.p`
    text-align: center;
`

export const IconWrapper = styled.div`
    position: relative;
    
    &::before{
        display: inline-block;
        content: "";
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translateX(-50%) translateY(-50%);
        
        position: absolute;
       
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
   
`
