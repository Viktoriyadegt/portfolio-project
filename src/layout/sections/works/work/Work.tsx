import {Link} from "../../../../components/Link.ts";
import {Button} from "../../../../components/Button.ts";
import {S} from "./../Works_Styles.ts"
import React from "react";

type Props = {
    src: string
    title: string
    text: string
}

export const Work: React.FC<Props> = ({src, title, text}: Props) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.StyledImage src={src} alt={title}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.StiledTitle>{title}</S.StiledTitle>
                <S.StiledText>{text}</S.StiledText>
                <Link active href={'#'}>DEMO</Link>
                <Link href={'#'}>CODE</Link>
            </S.Description>
        </S.Work>

    );
};

