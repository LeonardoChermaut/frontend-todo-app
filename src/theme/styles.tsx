import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

export const UseGlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
* {
    box - sizing: border-box;
    margin: 0;
    padding: 0;
}

html, #root {
    height: 100%;
}

body {
    background - color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.body};
}
`
