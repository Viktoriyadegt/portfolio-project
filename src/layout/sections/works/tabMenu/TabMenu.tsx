import {Link} from "../../../../components/Link.ts";
import React from "react";
import {S} from "./TabMenu_Styles.ts"

type Props = {
    items: string[]
}


export const TabMenu: React.FC<Props> = ({items}: Props) => {
    return (
        <S.Menu>
            <ul>
                {items.map((item, index) => {
                    return <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.Menu>
    );
};



