import "./assets/index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";
import { AuthProvider, useAuth } from "./auth/AuthProvider";
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

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          <RouterProvider router={router} context={{ queryClient }} />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>
  );
}
