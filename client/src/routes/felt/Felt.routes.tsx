import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";

export const fieldRootRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "felt",
});

export const fieldRoute = new Route({
  getParentRoute: () => fieldRootRoute,
  path: "$skill",
  component: lazy(() => import("./Felt")),
});
