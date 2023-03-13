import { lazy, Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() => import("src/features/Feed/Feed")),

  // onLoad: ({ context }) => {
  //   console.log(context);
  // },
  // onLoad: async ({ context }) => {
  //   // console.log(context);
  //   // const t = context.queryClient.getQueryData(["blabla"]);
  //   // console.log(t);
  //   // const t = getAuth();
  //   // console.log(auth);
  //   // context.queryClient.ensureQueryData({
  //   //   queryKey: ["/users"],
  //   //   queryFn: fetchUsers,
  //   // })
  // },
});
