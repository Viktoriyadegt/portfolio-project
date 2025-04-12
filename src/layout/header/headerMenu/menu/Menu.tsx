import {S} from "./../HeaderMenu_Styles.ts"
import React from "react";


export const Menu: React.FC<{ items: Array<string> }> = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.Link href="">
                        {item}
                        <S.Mask><span>{item}</span></S.Mask>
                        <S.Mask><span>{item}</span></S.Mask>
                    </S.Link>
                </S.ListItem>
            })}
        </ul>
    );
};

