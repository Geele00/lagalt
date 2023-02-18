import { Route } from "@tanstack/react-router";
import { ProjectPage } from "src/features/ProjectPage";
import { userRoute } from "..";

// Project
export const projectRoute = new Route({
  getParentRoute: () => userRoute,
  path: "$projectName",
  component: ProjectPage,
  // onLoad: () =>
  //   queryClient.ensureQueryData({
  //     queryKey: ["project"],
  //     queryFn: () => 5,
  //     // fetch("localhost:8080/projects")
  //     //   .then((res) => res.json())
  //     //   .then((data) => data),
  //   }),
});
