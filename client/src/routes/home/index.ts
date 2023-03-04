import { Route } from "src/utils/tanstack";
import { rootRoute } from "src/routes/__root";
import { Feed } from "src/features/Feed";
import { getAuth } from "firebase/auth";

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
