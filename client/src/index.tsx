import "./assets/index.css";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./Components";
import {
  forgotRoute,
  homeRoute,
  loginRoute,
  signupRoute,
  profilePageRoute,
  projectRoute,
} from "./Routes";

export const queryClient = new QueryClient();

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  ),
});

export const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$username",
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  signupRoute,
  forgotRoute,
  userRoute.addChildren([profilePageRoute, projectRoute]),
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
