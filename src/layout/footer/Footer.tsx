import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";


export const Footer = () => {
    return (
        <StiledFooter>
            <FlexContainer direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'in'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexContainer>
        </StiledFooter>
    )
        ;
};

const StiledFooter = styled.footer`
    background-color: rgba(175, 232, 200, 0.93);
    min-height: 50vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.span`

`