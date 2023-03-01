import { Route } from "src/utils/tanstack";
import { rootRoute } from "src/routes/__root";
import { MinSide } from "./MinSide";

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$username",
});

export const profilePageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "/",
  component: MinSide,
});
