import { userRoute } from "../routes";
import { lazy, Route } from "@tanstack/react-router";

export const messageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "melding",
  component: lazy(() => import("./Melding")),
});
