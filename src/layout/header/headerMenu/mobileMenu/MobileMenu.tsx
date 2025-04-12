import {Menu} from "../menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"

type Props = {
    items: Array<string>
}


export const MobileMenu = ({items}: Props) => {

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu items={items}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




