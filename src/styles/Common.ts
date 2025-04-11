import {theme} from "./Theme.ts";

type FontType = {
    family?: string
    weight?: number
    color?: string
    Fmin?: number
    Fmax?: number
    lineHeight?: number
}


export const Font = ({family, Fmax, Fmin, weight, color, lineHeight}: FontType) => `
family: ${family || 'Poppins'};
weight: ${weight || 400};
color: ${color || theme.colors.font};
lineHeight: ${lineHeight || 1.2};
font-size: calc(( 100vw - 360px ) / ( 1440 - 360 ) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`