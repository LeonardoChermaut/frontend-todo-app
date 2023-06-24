import { ThemeProvider } from 'styled-components';

interface IColors {
  primary: string;
  secondary: string;
  warn: string;
  success: string;
  error: string;
}

interface IThemes {
  colors: IColors;
}

interface IThemeProps {
  theme: IThemes;
  children: React.ReactNode;
}

export type ThemeType = IThemes;

export const theme = {
  colors: {
    primary: '#5d2c8b',
    secondary: '#ff7700',
    warn: '#ff8c00',
    success: '#2ecc71',
    error: '#e74c3c',
  },
};

export const UseTheme: React.FC<IThemeProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
