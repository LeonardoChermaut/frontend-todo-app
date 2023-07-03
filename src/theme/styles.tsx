import { createGlobalStyle, css } from 'styled-components';
import { ThemeType } from './theme';

export const UseGlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.cdnfonts.com/css/garet');
    
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
        font-family: Garet, sans-serif;
    }
`;
