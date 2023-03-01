import { Route } from "src/utils/tanstack";
import { rootRoute } from "src/routes/__root";
import { GlemtPassord } from "./GlemtPassord";

export const forgotRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "glemt-passord",
  component: GlemtPassord,
});
