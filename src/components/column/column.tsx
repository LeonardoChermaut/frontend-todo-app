import styled from 'styled-components';
import {
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  TextAlignProps,
  textAlign,
  alignItems,
  AlignItemsProps,
} from 'styled-system';

type ColumnProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  FlexboxProps &
  TextAlignProps &
  AlignItemsProps & {
    cursor?: string;
  };

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${space}
  ${color}
  ${border}
  ${layout}
  ${flexbox}
  ${textAlign}
  ${alignItems}
  ${borderRadius}
`;
