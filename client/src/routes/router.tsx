import { ReactRouter } from "@tanstack/react-router";
import { projectRoute } from "./$username/$projectName/ProsjektSide.routes";
import { messageRoute } from "./$username/melding/Melding.routes";
import { newProjectRoute } from "./$username/nytt-prosjekt/NyttProsjekt.routes";
import { profilePageRoute, userRoute } from "./$username/ProfilSide.routes";
import { forgotRoute } from "./glemt-passord/GlemtPassord.routes";
import { homeRoute } from "./home/Home.routes";
import { loginRoute } from "./logg-inn/LoggInn.routes";
import { logoutRoute } from "./logg-ut/LoggUt.routes";
import { signupRoute } from "./ny-bruker/NyBruker.routes";
import { rootRoute } from "./__root";

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
