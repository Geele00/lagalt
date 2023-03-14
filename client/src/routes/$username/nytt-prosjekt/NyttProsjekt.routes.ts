import { lazy, Route } from "@tanstack/react-router";
import { userRoute } from "../ProfilSide.routes";

export const newProjectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "nytt-prosjekt",
  component: lazy(() => import("./NyttProsjekt")),
});
