import { NyttProsjekt } from "./NyttProsjekt";
import { userRoute } from "../routes";
import { Route } from "@tanstack/react-router";

export const newProjectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "nytt-prosjekt",
  component: NyttProsjekt,
});
