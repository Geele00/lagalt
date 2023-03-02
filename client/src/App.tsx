import { queryClient } from ".";
import { useAuth } from "./auth";
import { router } from "./routes/router";
import { RouterProvider } from "./utils/tanstack";

export const App = () => {
  const { authState } = useAuth();

  return <RouterProvider router={router} context={{ queryClient }} />;
};
