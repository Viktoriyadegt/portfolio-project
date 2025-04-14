import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container.ts";
import {FlexContainer} from "../../components/FlexContainer.ts";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"
import {useEffect, useState} from "react";


const items: Array<{ title: string; href: string }> = [
    {
        title: 'HOME',
        href: 'home'
    },
    {
        title: 'SKILLS',
        href: 'skills'
    },
    {
        title: 'WORKS',
        href: 'works'
    },
    {
        title: 'TESTIMONY',
        href: 'testimony'
    },
    {
        title: 'CONTACTS',
        href: 'contact'
    }
]

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
                        ? <MobileMenu items={items}/>
                        : <DesktopMenu items={items}/>
                    }

                </FlexContainer>
            </Container>
        </S.Header>
    );
};


