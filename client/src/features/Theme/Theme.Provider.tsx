import { createContext, useContext, useMemo, useReducer } from "react";
import { ThemeContext, ThemeContextValue, IThemeProvider } from "./Theme.types";

const themeReducer = (
  currentMode: ThemeContext["mode"],
  action: ThemeContext
) => {
  const { type } = action;

  switch (type) {
    case "toggle":
      console.log(currentMode);
      if (currentMode === "light-mode") return "dark-mode";
      if (currentMode === "dark-mode") return "light-mode";

    default:
      return currentMode;
  }
};

const ThemeContext = createContext<ThemeContextValue>(null!);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [mode, toggleTheme] = useReducer(themeReducer, "light-mode");

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
