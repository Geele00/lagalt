import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";
import { Login } from "../../Features/Login";

export const loginRoute = (parentRoute: RootRoute, queryClient: QueryClient) =>
  new Route({
    getParentRoute: () => parentRoute,
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
