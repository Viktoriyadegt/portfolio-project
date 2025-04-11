import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

type Props = {
    items: string[]
}


export const TabMenu = ({items}: Props) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
   
    ul {
        display: flex;
        justify-content:space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
  
`


