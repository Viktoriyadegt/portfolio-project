import styled from "styled-components";

interface Props {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}
export const FlexContainer = styled.div<Props>`
    display: flex;
    flex-direction: ${props => props?.direction || 'row'};
    justify-content: ${props => props?.justify || 'flex-start'};
    align-items: ${props => props?.align || 'stretch'};
    flex-wrap: ${props => props?.wrap || 'nowrap'};
    height: 100%;
`