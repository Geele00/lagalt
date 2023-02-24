import { Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useAuth } from "src/auth/AuthProvider";
import { Header } from "src/features";

export const rootRoute = new RootRoute({
  component: () => {
    const { authState } = useAuth();

    console.log(authState);

    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <TanStackRouterDevtools position="bottom-left" />
      </>
    );
  },
});
