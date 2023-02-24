import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "src/features";

export const rootRoute = new RootRoute({
  onLoad: ({ context }) => {},
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
