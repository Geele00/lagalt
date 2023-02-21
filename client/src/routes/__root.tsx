import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "src/components";

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
});
