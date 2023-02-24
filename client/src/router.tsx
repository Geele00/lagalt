import { ReactRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { profilePageRoute, userRoute } from "./routes/$username";
import { projectRoute } from "./routes/$username/$projectName";
import { forgotRoute } from "./routes/glemt-passord";
import { loginRoute } from "./routes/logg-inn";
import { signupRoute } from "./routes/ny-bruker";
import { useAuth } from "./auth/AuthProvider";

export const routeTree = rootRoute.addChildren([
  indexRoute,
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
