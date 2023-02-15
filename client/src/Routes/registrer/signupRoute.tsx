import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";
import { Signup } from "../../Features/Signup";

export const signupRoute = (parentRoute: RootRoute, queryClient: QueryClient) =>
  new Route({
    getParentRoute: () => parentRoute,
    path: "/registrer",
    onLoad: () =>
      queryClient.ensureQueryData({
        queryKey: ["auth"],
        queryFn: () => 5,
        // fetch("localhost:8080/projects")
        //   .then((res) => res.json())
        //   .then((data) => data),
      }),
    component: Signup,
  });
