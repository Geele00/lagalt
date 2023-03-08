import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";
// import { GlemtPassord } from "./GlemtPassord";

export const forgotRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "glemt-passord",
  component: lazy(() => import("./GlemtPassord")),
});
