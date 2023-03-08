import { userRoute } from "../routes";
import { lazy, Route } from "@tanstack/react-router";

export const newProjectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "nytt-prosjekt",
  component: lazy(() => import("./NyttProsjekt")),
});
