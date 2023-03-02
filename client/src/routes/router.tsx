import { ReactRouter } from "src/utils/tanstack";
import { rootRoute } from "./__root";
import { homeRoute } from "./home";
import { profilePageRoute, userRoute } from "./$username";
import { projectRoute } from "./$username/$projectName";
import { forgotRoute } from "./glemt-passord";
import { loginRoute } from "./logg-inn";
import { signupRoute } from "./ny-bruker";

export const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  signupRoute,
  forgotRoute,
  userRoute.addChildren([profilePageRoute, projectRoute]),
]);

export const router = new ReactRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
