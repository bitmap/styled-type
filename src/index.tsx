import React, { useContext, ReactNode } from "react";
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
  Theme,
  typography,
  TypographyProps,
} from "styled-system";

type TypeStylesProps = SpaceProps & LayoutProps & TypographyProps & ColorProps;

interface Props extends ColorStyleProps, TextStyleProps, TypeStylesProps {
  children: ReactNode;
  typeStyle?: string;
  readonly theme?: Theme & {
    typeStyles: {
      [key: string]: TypeStylesProps;
    };
  };
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

export const Text = ({ typeStyle = "body", ...props }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledType {...theme.typeStyles[typeStyle]} {...props}>
      {props.children}
    </StyledType>
  );
};
