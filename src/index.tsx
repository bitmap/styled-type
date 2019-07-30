import React, { Props, HTMLProps, useContext, forwardRef } from "react";
import styled, { ThemeContext } from "styled-components";
import {
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps
} from "styled-system";

type StyledTypeProps = Props<Element> &
  ColorProps &
  ColorStyleProps &
  LayoutProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps;

interface TextProps extends StyledTypeProps {
  typeStyle?: string;
}

const StyledType = styled("p")(
  textStyle,
  colorStyle,
  compose(
    typography,
    color,
    space,
    layout
  )
);

export const Text = forwardRef<Element, TextProps & HTMLProps<Element>>(
  ({ typeStyle = "body", ...props }, ref) => {
    const theme = useContext(ThemeContext);
    return (
      <StyledType {...props} ref={ref} {...theme.typeStyles[typeStyle]}>
        {props.children}
      </StyledType>
    );
  }
);
