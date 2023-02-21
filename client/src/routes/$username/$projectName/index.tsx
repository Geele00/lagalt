import { Route } from "@tanstack/react-router";
import { fetchProjects } from "src/api/v1/projects";
import { queryClient } from "src/index";
import { userRoute } from "..";
import { ProsjektSide } from "./ProsjektSide";

// Project
export const projectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "$projectName",
  component: ProsjektSide,

  onLoad: async () =>
    queryClient.ensureQueryData({
      queryKey: ["project"],
      // queryFn: fetchProjects,
      queryFn: () => 5,
    }),
});
