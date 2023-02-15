import "./assets/index.css";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  ReactRouter,
  RootRoute,
  RouterProvider,
} from "@tanstack/react-router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./Components";
import { homeRoute, loginRoute, projectRoute, signupRoute } from "./Routes";

const queryClient = new QueryClient();

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute(rootRoute, queryClient),
  loginRoute(rootRoute, queryClient),
  signupRoute(rootRoute, queryClient),
  projectRoute(rootRoute, queryClient),
]);

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
