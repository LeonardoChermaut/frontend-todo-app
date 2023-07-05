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

    body {
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        color: ${({ theme }) => theme.colors.secondary};
        font-family: Garet, sans-serif;
    }
`;
