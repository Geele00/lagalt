import { lazy, Route } from "@tanstack/react-router";
import { userRoute } from "../routes";

export const messageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "melding",
  component: lazy(() => import("./Melding")),
});
