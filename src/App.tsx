import { UseGlobalStyle, UseTheme, theme } from './theme';
import { AppRoutes } from './routes';
import { TaskProvider } from './context';

export const App = () => {
  return (
    <UseTheme theme={theme}>
      <TaskProvider>
        <UseGlobalStyle />
        <AppRoutes />
      </TaskProvider>
    </UseTheme>
  );
};
