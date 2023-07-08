import styled from 'styled-components';
import { typography, TypographyProps, color, ColorProps, margin, MarginProps } from 'styled-system';

type TextProps = TypographyProps & MarginProps & ColorProps;

export const Text = styled.a<TextProps>`
  ${color}
  ${margin}
  ${typography}
`;
