import { Route } from "@tanstack/react-router";
import { queryClient } from "src/index";
import { rootRoute } from "src/routes/__root";
import { NyBruker } from "./NyBruker";

export const signupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/ny-bruker",
  onLoad: () =>
    queryClient.ensureQueryData({
      queryKey: ["auth"],
      queryFn: () => 5,
      // fetch("localhost:8080/projects")
      //   .then((res) => res.json())
      //   .then((data) => data),
    }),
  component: NyBruker,
});
