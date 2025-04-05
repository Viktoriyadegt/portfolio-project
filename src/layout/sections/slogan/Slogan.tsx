import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";


export const Slogan = () => {
    return (
        <StiledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>HIRE ME</Button>
        </StiledSlogan>
    );
};

const StiledSlogan = styled.section`
    background-color: rgb(204, 160, 221);
    min-height: 30vh;
    text-align: center;
`
