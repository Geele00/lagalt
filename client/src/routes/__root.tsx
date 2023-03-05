import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "src/features/Header/Header";

export const rootRoute = new RootRoute({
  // onLoad: ({ context }) => {
  //   console.log(context);
  //   console.log(22);
  // },
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
