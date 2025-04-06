import styled from "styled-components";

type Props = {
    items: String[]
}


export const Menu = ({items}: Props) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content:center;
    }
`
