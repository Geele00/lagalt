import { Route } from "@tanstack/react-router";
import { Profile } from "src/Features/Profile";
import { userRoute } from "src/index";

export const profilePageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "/",
  component: Profile,
});
