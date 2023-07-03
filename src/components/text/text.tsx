import styled from 'styled-components';
import { typography, TypographyProps, color, ColorProps } from 'styled-system';

type TextProps = TypographyProps & ColorProps;

export const Text = styled.a<TextProps>`
  ${color}
  ${typography}
`;
