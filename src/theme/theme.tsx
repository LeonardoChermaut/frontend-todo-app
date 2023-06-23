import { ThemeProvider } from 'styled-components';

type FontSize = number[] & {
    body: number;
    bodyExtraLarge: number;
    displayExtraLarge: number;
};

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

interface IThemeProps {
    theme: IThemes;
    children: React.ReactNode;
}

const fontSize: FontSize = [14, 20, 96] as FontSize;

fontSize.body = fontSize[0];
fontSize.bodyExtraLarge = fontSize[1];
fontSize.displayExtraLarge = fontSize[2];

export const useTheme: React.FC<IThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
