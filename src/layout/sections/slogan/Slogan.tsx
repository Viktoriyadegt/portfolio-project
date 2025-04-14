import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import React from "react";


export const Slogan: React.FC = () => {
    return (
        <StiledSlogan id={"slogan"}>
            <Container>
                <FlexContainer direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>HIRE ME</Button>
                </FlexContainer>
            </Container>
        </StiledSlogan>
    );
};

const StiledSlogan = styled.section`

`
