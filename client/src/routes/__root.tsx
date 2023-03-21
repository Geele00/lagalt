import { RootRoute } from "@tanstack/react-router";
import App from "src/App/App";
import { ThemeProvider } from "src/features/Theme/Theme.Provider";

export const rootRoute = new RootRoute({
  component: () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
});

// <TanStackRouterDevtools position="bottom-left" />
