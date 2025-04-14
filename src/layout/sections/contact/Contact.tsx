import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contact_Styles.ts"
import React from "react";


export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field placeholder={'message'} as={'textarea'}/>
                    <Button>SEND MESSAGE</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    );
};


