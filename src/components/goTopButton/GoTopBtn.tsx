import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {useEffect, useState} from "react";
import {animateScroll as scroll} from 'react-scroll';

export const GoTopBtn = () => {

    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowGoTop(true);
            } else {
                setShowGoTop(false)
            }
        })
    }, [])

    return (
        <>
            {showGoTop && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <Icon iconId={"gotop"} width={"16"} height={"15"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;

    position: fixed;
    right: 30px;
    bottom: 30px;
`

