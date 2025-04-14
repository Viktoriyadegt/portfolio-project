import {S} from "./../HeaderMenu_Styles.ts"
import React from "react";


export const Menu: React.FC<{ items: Array<{ title: string; href: string }> }> = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.NavLink
                        to={item.href}
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        duration={2000}
                        offset={15}
                    >
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};

