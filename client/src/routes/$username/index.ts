import { Route } from "@tanstack/react-router";
import { ProfilePage } from "src/features/ProfilePage";
import { rootRoute } from "src/routes/__root";

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$username",
});

export const profilePageRoute = new Route({
  getParentRoute: () => userRoute,
  path: "/",
  component: ProfilePage,
});
