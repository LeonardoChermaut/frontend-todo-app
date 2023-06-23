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

export const theme = {
    fontSize: {
        body: 14,
        bodyExtraLarge: 20,
        displayExtraLarge: 96,
    },
    colors: {
        primary: "#5f00b8",
        secondary: "#ff7700",
        warn: "#ff8c00",
        success: "#2ecc71",
        error: "#e74c3c",
    },
};

export const UseTheme: React.FC<IThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
