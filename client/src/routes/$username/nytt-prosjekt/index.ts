import { Route } from "src/utils/tanstack";
import { NyttProsjekt } from "./NyttProsjekt";
import { userRoute } from "..";

export const newProjectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "nytt-prosjekt",
  component: NyttProsjekt,
});
