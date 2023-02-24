import { Route } from "@tanstack/react-router";
import { getAuth } from "firebase/auth";
import { queryClient } from "src/index";
import { rootRoute } from "src/routes/__root";
import { LoggInn } from "./LoggInn";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/logg-inn",
  onLoad: ({ context }: any) => {
    context.queryClient.ensureQueryData({
      queryKey: ["auth"],
      queryFn: () => 5,
      // fetch("localhost:8080/projects")
      //   .then((res) => res.json())
      //   .then((data) => data),
    });

    const t = getAuth();
    console.log(t);
  },
  component: LoggInn,
});
