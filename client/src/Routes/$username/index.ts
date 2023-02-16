import { Route } from "@tanstack/react-router";

import { userRoute } from "src/index";
import { Profile } from "src/Features/Profile";

export const profilePageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "/",
  component: Profile,
});
