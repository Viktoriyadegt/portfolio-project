import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const menuItems: Array<String> = ['HOME', 'SKILLS', 'WORKS', 'TESTIMONY', 'CONTACTS']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu items={menuItems}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
