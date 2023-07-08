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
        background: rgb(215,212,212);
        background: linear-gradient(90deg, rgba(215,212,212,1) 0%, rgba(165,218,167,1) 100%, rgba(9,9,121,1) 459%);
        color: ${({ theme }) => theme.colors.secondary};
        font-family: Garet, sans-serif;
    }
`;
