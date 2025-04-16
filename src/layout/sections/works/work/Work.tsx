import {Button} from "../../../../components/Button.ts";
import {S} from "./../Works_Styles.ts"
import React from "react";
import {Link} from "../../../../components/Link.ts";

type Props = {
    src: string
    title: string
    text: string
}

export const Work: React.FC<Props> = ({src, title, text}: Props) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt={title}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.TextWrapper>
                <S.ProjectTitle>{title}</S.ProjectTitle>
                <S.ProjectText>{text}</S.ProjectText>
                <div>
                    <Link href={'#'}>DEMO</Link>
                    <Link href={'#'}>CODE</Link>
                </div>
            </S.TextWrapper>
        </S.Work>

    );
};

