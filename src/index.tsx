import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PixelRatio } from 'react-native'
import { SvgCss } from 'react-native-svg'
import * as ReactDOMServer from 'react-dom/server'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, allOptions } from './options'
import {ImageSVG, Skia} from "@shopify/react-native-skia";

// import { default as PieceComponent } from './avatar/piece';

export interface Props {
  avatarStyle: AvatarStyle
  backgroundColor?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

class AvatarComponent extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext () {
    return { optionContext: this.optionContext }
  }

  UNSAFE_componentWillMount () {
    this.updateOptionContext(this.props)
  }

  componentWillReceiveProps (nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render () {
    const { avatarStyle, style, backgroundColor } = this.props
    return <Avatar avatarStyle={avatarStyle as AvatarStyle} backgroundColor={backgroundColor} style={style} />
  }

  private updateOptionContext (props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

// class Piece extends React.Component<Props> {
//   static childContextTypes = {
//     optionContext: PropTypes.instanceOf(OptionContext)
//   }
//   private optionContext: OptionContext = new OptionContext(allOptions)

//   getChildContext () {
//     return { optionContext: this.optionContext }
//   }

//   constructor (props: Props) {
//     super(props)
//     this.updateOptionContext(this.props)
//   }

//   componentWillReceiveProps (nextProps: Props) {
//     this.updateOptionContext(nextProps)
//   }

//   render () {
//     const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
//     return <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox}/>
//   }

//   private updateOptionContext (props: Props) {
//     const data: { [index: string]: string } = {}
//     for (const option of allOptions) {
//       const value = props[option.key]
//       if (!value) {
//         continue
//       }
//       data[option.key] = value
//     }
//     this.optionContext.setData(data)
//   }
// }


export const AvatarReactNativeSkia: React.FC<Props & { size }> = ({ size, ...childProps }) => {
  const pixelRatio = PixelRatio.getPixelSizeForLayoutSize(size);
  const svg = Skia.SVG.MakeFromString(ReactDOMServer.renderToString(
    <AvatarComponent
      style={{
        width: pixelRatio,
        height: pixelRatio,
      }}
      {...childProps}
    />
  ));
  return ( svg ? (
      <ImageSVG
        svg={svg}
        x={0}
        y={0}
        width={pixelRatio}
        height={pixelRatio}
      />
    ) : null
  )
}


export const AvatarReactNativeSvg: React.FC<Props & { size }> = ({ size, ...childProps }) => {
  return (
    <SvgCss
      xml={ReactDOMServer.renderToString(
        <AvatarComponent
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(size),
            height: PixelRatio.getPixelSizeForLayoutSize(size),
          }}
          {...childProps}
        />,
      )}
      width={size}
      height={size}
    />
  )
}
