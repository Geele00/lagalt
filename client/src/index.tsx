import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/css-reset.css";
import { Header } from "./Components/Header";
import { Feed } from "./Features/Feed";
import { Login } from "./Features/Login";
import "./index.css";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staletime: 1000 * 10,
  //   },
  // },
});

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  onLoad: () =>
    queryClient.ensureQueryData({
      queryKey: ["feed"],
      queryFn: async () => 4,
      // fetch("localhost:8080/projects")
      //   .then((res) => res.json())
      //   .then((data) => data),
    }),
  component: Feed,
  errorComponent: () => "3rr0rL0l",
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);
const router = new ReactRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
