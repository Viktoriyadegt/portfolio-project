import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer.ts";
import {S} from "./../Skills_Styles.ts"
import React from "react";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill: React.FC<Props> = ({iconId, title, description}: Props) => {
    return (
        <S.Skill>
            <FlexContainer align={'center'} direction={'column'}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>

                <S.StiledSkillTitle>{title}</S.StiledSkillTitle>
                <S.StiledSkillText>{description}</S.StiledSkillText>
            </FlexContainer>
        </S.Skill>
    );
};


