import styled from 'styled-components';
import { space, SpaceProps, variant, width, WidthProps } from 'styled-system';

type ButtonProps = SpaceProps &
  WidthProps & {
    variant?: string;
  };

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  cursor: pointer;
  ${width}
  ${variant({
    variants: {
      default: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
      },
      primary: {
        padding: '10px 70px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      transparent: {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      },
    },
  })}
  ${space}
`;

Button.defaultProps = {
  variant: 'default',
};
