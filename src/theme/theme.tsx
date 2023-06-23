import { ThemeProvider } from 'styled-components';

interface IColors {
    primary: string;
    secondary: string;
    warn: string;
    success: string;
    error: string;
}

interface IThemes {
    fontSize: {
        body: number;
        bodyExtraLarge: number;
        displayExtraLarge: number;
    };
    colors: IColors;
}

interface IThemeProps {
    theme: IThemes;
    children: React.ReactNode;
}

export type ThemeType = IThemes;

export const UseTheme: React.FC<IThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
