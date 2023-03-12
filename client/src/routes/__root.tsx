import { RootRoute } from "@tanstack/react-router";
import App from "src/App/App";

export const rootRoute = new RootRoute({
  component: () => <App />,
});

// <TanStackRouterDevtools position="bottom-left" />
