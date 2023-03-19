import { Route } from "@tanstack/react-router";
import { userRoute } from "../ProfilSide.routes";
import { ProsjektSide } from "./ProsjektSide";

// Project
export const projectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "$projectName",
  component: ProsjektSide,
});
