import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";
export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$username",
});

export const profilePageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "/",
  component: lazy(() => import("./ProfilSide")),
});
