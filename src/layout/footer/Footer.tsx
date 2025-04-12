import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {theme} from "../../styles/Theme.ts";
import {Font} from "../../styles/Common.ts";


export const Footer = () => {
    return (
        <StiledFooter>
            <FlexContainer direction={'column'} align={'center'}>
                <Name>Victoria</Name>
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
                <Copyright>© 2023 Victoria Degtyareva, All Rights Reserved.</Copyright>
            </FlexContainer>
        </StiledFooter>
    )
        ;
};

const StiledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${Font({family: `Josefin Sans, sans-serif`, Fmax: 22, Fmin: 16, weight: 700})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }

`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`