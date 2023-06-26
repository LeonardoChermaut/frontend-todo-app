import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const UseGlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
}

html, #root {
    height: 100%;
}

body {
      background: linear-gradient(to right, #c31432, #240b36);
    color: ${({ theme }) => theme.colors.secondary};
}
`;
