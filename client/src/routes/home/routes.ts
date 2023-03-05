import { Route } from "@tanstack/react-router";
import { Feed } from "src/features/Feed/Feed";
import { rootRoute } from "src/routes/__root";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Feed,
  path: "/",
  onLoad: async ({ context }) => {
    // console.log(context);
    // const t = context.queryClient.getQueryData(["blabla"]);
    // console.log(t);
    // const t = getAuth();
    // console.log(auth);
    // context.queryClient.ensureQueryData({
    //   queryKey: ["/users"],
    //   queryFn: fetchUsers,
    // })
  },
});
