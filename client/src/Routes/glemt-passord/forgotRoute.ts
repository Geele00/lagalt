import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";

export const forgotRoute = (rootRoute: RootRoute, queryClient: QueryClient) =>
  new Route({
    getParentRoute: () => rootRoute,
    path: "glemt-passord",
    component: () => {},
  });
