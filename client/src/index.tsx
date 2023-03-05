import "./assets/index.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth/AuthProvider";
import { RouterProvider } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      // queryFn: async ({ queryKey }) => {
      //   const res = await fetch(`${apiUrl}${queryKey[0]}`);
      //   if (!res.ok) {
      //     throw new Error("Network error.");
      //   }
      //   return res.json();
      // },
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
