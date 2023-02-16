import { Route } from "@tanstack/react-router";
import { queryClient, rootRoute } from "src/index";
import { Feed } from "src/Features/Feed";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  onLoad: () =>
    queryClient.ensureQueryData({
      queryKey: ["feed"],
      queryFn: () => 5,
      // fetch("localhost:8080/projects")
      //   .then((res) => res.json())
      //   .then((data) => data),
    }),
  component: Feed,
  errorComponent: () => "3rr0rL0l",
});
