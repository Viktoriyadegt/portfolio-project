import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container.tsx";
import {FlexContainer} from "../../../components/FlexContainer.tsx";


export const Slogan = () => {
    return (
        <StiledSlogan>
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
