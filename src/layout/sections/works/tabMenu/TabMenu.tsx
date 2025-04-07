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
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content:center;
    }
`

const ListItem = styled.li`
  
`


