import {Menu} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts";
import React from "react";

type Props = {
    items: Array<{ title:string; href:string }>
}


export const DesktopMenu:React.FC<Props> = ({items}: Props) => {
    return (
        <S.DesktopMenu>
            <Menu items={items}/>
        </S.DesktopMenu>
    );
};

