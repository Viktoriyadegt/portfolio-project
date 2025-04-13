import {Link} from "../../../../components/Link.ts";
import React from "react";
import {S} from "./TabMenu_Styles.ts"
import type {StatusType} from "../Works.tsx";

type Props = {
    tabsItems: Array<{ title: string, status: StatusType }>
    changeFilter: (value: StatusType) => void;
    filter: StatusType
}


export const TabMenu: React.FC<Props> = ({tabsItems, changeFilter, filter}: Props) => {
    return (
        <S.Menu>
            <ul>
                {tabsItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link as={'Button'} active={filter === item.status}
                              onClick={() => changeFilter(item.status)}>{item.title}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.Menu>
    );
};



