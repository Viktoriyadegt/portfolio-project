import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer.ts";
import {S} from "./Footer_Styles.ts"
import React from "react";

const ListState = [
    {iconId: 'instagram'},
    {iconId: 'telegram'},
    {iconId: 'vk'},
    {iconId: 'in'},

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexContainer direction={'column'} align={'center'}>
                <S.Name>Victoria</S.Name>

                <S.SocialList>
                    {
                        ListState.map((item, index) => {
                            return <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}
                                          iconId={item.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        })
                    }
                </S.SocialList>

                <S.Copyright>© 2023 Victoria Degtyareva, All Rights Reserved.</S.Copyright>
            </FlexContainer>
        </S.Footer>
    )
        ;
};

