import { Outlet, RootRoute, TanStackRouterDevtools } from "src/utils/tanstack";
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
