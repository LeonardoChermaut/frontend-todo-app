import { IThemeProps, IThemes } from 'interface';
import { ThemeProvider } from 'styled-components';

export type ThemeType = IThemes;

export const theme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    warn: '#ff8c00',
    success: '#2ecc71',
    error: '#e74c3c',
  },
};

export const UseTheme: React.FC<IThemeProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
