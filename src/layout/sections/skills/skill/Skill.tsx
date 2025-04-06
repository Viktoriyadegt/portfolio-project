import styled from "styled-components";

import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({iconId, title, description}: Props) => {
    return (
        <StyledSkill>

            <FlexContainer direction={'column'} align={'center'}>
                <Icon iconId={iconId}/>
                <StiledSkillTitle>{title}</StiledSkillTitle>
                <StiledSkillText>{description}</StiledSkillText>
            </FlexContainer>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(221, 240, 241, 0.59);
    margin: 10px;
`
const StiledSkillTitle = styled.h3`

`

const StiledSkillText = styled.p`

`