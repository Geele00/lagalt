import { Route } from "@tanstack/react-router";
import { queryClient, rootRoute } from "src/index";
import { Signup } from "../../Features/Signup";

export const signupRoute = new Route({
  getParentRoute: () => rootRoute,
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
