import * as React from 'react';
import { AvatarStyle } from './avatar';
export interface Props {
    avatarStyle: AvatarStyle;
    backgroundColor?: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export declare const AvatarReactNativeSkia: React.FC<Props & {
    size: any;
}>;
export declare const AvatarReactNativeSvg: React.FC<Props & {
    size: any;
}>;
