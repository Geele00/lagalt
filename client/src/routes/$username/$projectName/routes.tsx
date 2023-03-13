import { Route } from "@tanstack/react-router";
import { queryClient } from "src/index";
import { userRoute } from "../routes";
import { ProsjektSide } from "./ProsjektSide";

// Project
export const projectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "$projectName",
  component: ProsjektSide,
});
