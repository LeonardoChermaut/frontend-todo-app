import styled from 'styled-components';
import { typography, TypographyProps, color, ColorProps, margin, MarginProps, flex, FlexProps } from 'styled-system';

type TextProps = TypographyProps & MarginProps & ColorProps & FlexProps;

export const Text = styled.a<TextProps>`
  ${flex}
  ${color}
  ${margin}
  ${typography}
`;
