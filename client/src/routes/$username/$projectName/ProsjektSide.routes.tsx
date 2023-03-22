import { lazy, Route } from "@tanstack/react-router";
import { userRoute } from "../ProfilSide.routes";

// Project
export const projectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "$projectName",
  component: lazy(() => import("./ProsjektSide")),
});
