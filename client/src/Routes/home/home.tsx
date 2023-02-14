import { Route } from "@tanstack/react-router";
import { Feed } from "../../Features/Feed";

export const indexRoute = ({ rootRoute, queryClient }: any) =>
  new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    onLoad: () =>
      queryClient.ensureQueryData({ queryKey: ["feed"], queryFn: () => {} }),
    component: Feed,
  });
