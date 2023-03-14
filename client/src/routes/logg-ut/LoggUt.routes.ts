import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";

export const logoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/logg-ut",
  component: lazy(() => import("./LoggUt")),
});
