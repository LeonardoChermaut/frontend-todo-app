import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system';

type RowProps = LayoutProps & SpaceProps & AlignItemsProps & JustifyContentProps;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${layout}
  ${alignItems}
  ${justifyContent}
`;
