import {Menu} from "../menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"
import React, {useState} from "react";

type Props = {
    items: Array<{ title:string; href:string }>
}


export const MobileMenu: React.FC<Props> = ({items}: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const changeModeIsOpen = () => setIsOpen(!isOpen);

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={changeModeIsOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpen} onClick={() => setIsOpen(false)}>
                <Menu items={items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




