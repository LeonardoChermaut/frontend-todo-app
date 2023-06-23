import { ThemeProvider } from 'styled-components';

interface IColors {
    primary: string;
    secondary: string;
    warn: string;
    success: string;
    error: string;
}

interface IThemes {
    fontSize: FontSize;
    colors: IColors;
}

type FontSize = number[] & {
    body: number;
    bodyExtraLarge: number;
    displayExtraLarge: number;
};


const colors: IColors = {
    primary: "#0070f3",
    secondary: "#ff0080",
    warn: "#ff0000",
    success: "#00ff00",
    error: "#ff0000",
};

const fontSize: FontSize = [14, 20, 96] as FontSize;

fontSize.body = fontSize[0];
fontSize.bodyExtraLarge = fontSize[1];
fontSize.displayExtraLarge = fontSize[2];

const themes: IThemes = {
    fontSize,
    colors,
};

interface ThemeProps {
    theme: IThemes;
    children: React.ReactNode;
}

export const useTheme: React.FC<ThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
