import { useTheme } from "./Theme.Provider";
import { lazy } from "react";

const DarkTheme = lazy(() => import("src/features/Theme/DarkTheme"));
const LightTheme = lazy(() => import("src/features/Theme/LightTheme"));

const ThemeWrapper = ({ children }: any) => {
  const { mode } = useTheme();

  // {mode === "light-mode" && <LightTheme />}
  // {mode === "dark-mode" && <DarkTheme />}
  return <>{children}</>;
};

export default ThemeWrapper;
