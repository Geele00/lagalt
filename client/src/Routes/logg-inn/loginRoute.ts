import { Route } from "@tanstack/react-router";
import { queryClient, rootRoute } from "src/index";
import { Login } from "src/Features/Login";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/logg-inn",
  onLoad: () =>
    queryClient.ensureQueryData({
      queryKey: ["auth"],
      queryFn: () => 5,
      // fetch("localhost:8080/projects")
      //   .then((res) => res.json())
      //   .then((data) => data),
    }),
  component: Login,
});
