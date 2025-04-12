import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"
import {useEffect, useState} from "react";


const menuItems: Array<string> = ['HOME', 'SKILLS', 'WORKS', 'TESTIMONY', 'CONTACTS']

export const Header: React.FC = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const referenceScreenWidth = 768

    useEffect(() => {
        const handleSetScreenWidth = () => setScreenWidth(window.innerWidth)
        window.addEventListener("resize", handleSetScreenWidth);

        return () => window.removeEventListener("resize", handleSetScreenWidth);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexContainer justify={"space-between"} align={"center"}>
                    <Logo/>

                    {screenWidth < referenceScreenWidth
                        ? <MobileMenu items={menuItems}/>
                        : <DesktopMenu items={menuItems}/>
                    }

                </FlexContainer>
            </Container>
        </S.Header>
    );
};


