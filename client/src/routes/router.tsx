import { ReactRouter } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { homeRoute } from "./home/routes";
import { profilePageRoute, userRoute } from "./$username/routes";
import { projectRoute } from "./$username/$projectName/routes";
import { forgotRoute } from "./glemt-passord/routes";
import { loginRoute } from "./logg-inn/routes";
import { signupRoute } from "./ny-bruker/routes";
import { newProjectRoute } from "./$username/nytt-prosjekt/routes";
import { logoutRoute } from "./logg-ut/routes";
import { messageRoute } from "./$username/melding/routes";

export const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  logoutRoute,
  signupRoute,
  forgotRoute,
  userRoute.addChildren([
    profilePageRoute,
    projectRoute,
    newProjectRoute,
    messageRoute,
  ]),
]);

export const router = new ReactRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
