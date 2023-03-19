import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/logg-inn",
  component: lazy(() => import("./LoggInn")),
});
