import { Route } from "@tanstack/react-router";
import { queryClient } from "src/index";
import { rootRoute } from "src/routes/__root";
import { Login } from "src/features/Login";

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
