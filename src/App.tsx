import { UseTheme, theme } from "./theme";
import { AppRoutes } from "./routes";

export const App = () => {

  return (
    <UseTheme theme={theme}>
      <AppRoutes />
    </UseTheme>
  );
}
