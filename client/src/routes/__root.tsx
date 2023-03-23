import { RootRoute } from "@tanstack/react-router";
import App from "src/App/App";
import { AuthProvider } from "src/auth/Auth.Provider";
import { ThemeProvider } from "src/features/Theme/Theme.Provider";

export const rootRoute = new RootRoute({
  component: () => (
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  ),
});

// <TanStackRouterDevtools position="bottom-left" />
