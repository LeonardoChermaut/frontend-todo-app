import { ThemeProvider } from 'styled-components';

const fontSize: any = [14, 20, 96];

fontSize.body = fontSize[0];
fontSize.bodyExtraLarge = fontSize[1];
fontSize.displayExtraLarge = fontSize[2];

const colors = {
    primary: "#0070f3",
    secondary: "#ff0080",
    warn: "#ff0000",
    success: "#00ff00",
    error: "#ff0000",
}

const themes = {
    fontSize,
    colors: {
        ...colors,
    }
}

interface ThemeProps {
    theme: typeof themes;
    children: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ theme, children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);