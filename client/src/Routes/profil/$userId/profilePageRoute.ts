import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";

export const profilePageRoute = (
  parentRoute: RootRoute,
  queryClient: QueryClient
) =>
  new Route({
    getParentRoute: () => parentRoute,
    path: "profil/$userId",
    component: () => {},
  });
