import React, { useContext, ReactNode } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  compose,
  color,
  space,
  layout,
  typography,
  textStyle,
  colorStyle,
  Theme
} from "styled-system"

import * as CSS from "csstype"

const StyledType = styled("p")(
  textStyle,
  colorStyle,
  compose(
    typography,
    color,
    space,
    layout
  )
)

interface Props {
  children: ReactNode
  typeStyle?: string
  readonly theme?: Theme & {
    typeStyles: {
      [key: string]: CSS.StandardProperties
    }
  }
}

export const Text = ({ typeStyle = "body", ...props }: Props) => {
  const theme = useContext(ThemeContext)
  return <StyledType {...theme.typeStyles[typeStyle]} {...props}>{props.children}</StyledType>
}
