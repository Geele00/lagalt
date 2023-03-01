import { Route } from "src/utils/tanstack";
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
  },
  component: LoggInn,
});
