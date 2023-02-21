import "./assets/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createContext, StrictMode, useContext } from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { AuthProvider } from "./auth/AuthProvider";
import { IAuthContext } from "./auth/AuthProvider/types";
import { apiUrl } from "./api/v1";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const res = await fetch(`${apiUrl}${queryKey[0]}`);
        if (!res.ok) {
          throw new Error("Network error.");
        }
        return res.json();
      },
    },
  },
});

export const AuthContext = createContext<IAuthContext>(null!);

export const useUser = () => {
  return useContext(AuthContext);
};

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
