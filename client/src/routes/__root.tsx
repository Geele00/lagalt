import { RootRoute } from "@tanstack/react-router";
import App from "src/App/App";

export const rootRoute = new RootRoute({
  // onLoad: ({ context }) => {
  //   console.log(auth.currentUser);
  //   console.log(context);
  //   console.log(22);
  // },
  component: () => <App routeChanged={{}} />,
});

// <TanStackRouterDevtools position="bottom-left" />
