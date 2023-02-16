import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";
import { Profile } from "src/Features/Profile";

export const profilePageRoute = (
  parentRoute: Route,
  queryClient: QueryClient
) =>
  new Route({
    getParentRoute: () => parentRoute,
    path: "/",
    component: Profile,
  });
