import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";


export const Contact = () => {
    return (
        <StiledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'subject'}/>
                <Field placeholder={'message'} as={'textarea'}/>
                <Button>SEND MESSAGE</Button>
            </StyledForm>

        </StiledContact>
    );
};

const StiledContact = styled.section`
    background-color: rgba(226, 232, 175, 0.93);
    min-height: 50vh;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 10px

`
const Field = styled.input`

`