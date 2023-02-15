import { QueryClient } from "@tanstack/react-query";
import { RootRoute, Route } from "@tanstack/react-router";
import { ProjectPage } from "../../../Features/ProjectPage";

// Project
export const projectRoute = (rootRoute: RootRoute, queryClient: QueryClient) =>
  new Route({
    getParentRoute: () => rootRoute,
    path: "/prosjekt/$projectId",
    component: ProjectPage,
    onLoad: () =>
      queryClient.ensureQueryData({
        queryKey: ["project"],
        queryFn: () => 5,
        // fetch("localhost:8080/projects")
        //   .then((res) => res.json())
        //   .then((data) => data),
      }),
  });
