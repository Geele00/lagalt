import { Route } from "@tanstack/react-router";
import { rootRoute } from "src/index";

export const forgotRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "glemt-passord",
  component: () => {},
});
