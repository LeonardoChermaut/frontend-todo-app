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
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    color: ${({ theme }) => theme.colors.secondary};
}
`;
