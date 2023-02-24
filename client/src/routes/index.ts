import { Route } from "@tanstack/react-router";
import { rootRoute } from "src/routes/__root";
import { Feed } from "src/features/Feed";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Feed,
  path: "/",
  onLoad: async ({ context }) => {
    console.log(context);
    // context.queryClient.ensureQueryData({
    //   queryKey: ["/users"],
    //   queryFn: fetchUsers,
    // })
  },
});
