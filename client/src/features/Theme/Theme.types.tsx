import { Dispatch, ReactNode } from "react";

export interface ThemeContext {
  mode?: "light-mode" | "dark-mode";
  type: "toggle";
}

export interface IThemeProvider {
  children: ReactNode;
}

export interface ThemeContextValue {
  mode: ThemeContext["mode"];
  toggleTheme: Dispatch<ThemeContext>;
}
