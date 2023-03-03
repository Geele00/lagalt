import "./assets/index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  ReactQueryDevtools,
  QueryClient,
  QueryClientProvider,
  RouterProvider,
} from "./utils/tanstack";
import { router } from "./routes/router";
import { AuthProvider } from "./auth";
import { apiUrl } from "./api/v1/defaults";

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
