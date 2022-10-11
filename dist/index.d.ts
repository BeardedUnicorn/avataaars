import * as React from 'react';
export interface Props {
    avatarStyle: string;
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
export declare const AvatarReactNativeSkia: React.SFC<Props & {
    size: any;
}>;
export declare const AvatarReactNativeSvg: React.SFC<Props & {
    size: any;
}>;
