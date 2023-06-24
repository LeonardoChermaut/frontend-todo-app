import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';

type TextProps = TypographyProps;

export const Text = styled.a<TextProps>`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  ${typography}
`;
