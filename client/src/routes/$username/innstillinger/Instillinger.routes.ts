import { lazy, Route } from "@tanstack/react-router";
import { userRoute } from "../ProfilSide.routes";

export const userSettingsRoute = new Route({
  getParentRoute: () => userRoute,
  path: "instillinger",
  component: lazy(() => import("./Instillinger")),
});
