import "./assets/index.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth/AuthProvider";
import { RouterProvider } from "@tanstack/react-router";
import { defaultOptions } from "./api/v1/defaults";
import { IAuthState } from "./auth/types";

const apiUri = import.meta.env.VITE_API_V1_URL;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,

      queryFn: async ({ queryKey, pageParam, meta }) => {
        //     const authState = queryClient.getQueryData(["auth"]) || null;
        const [qKey, queryAuthState] = queryKey;
        const { token } = queryAuthState as IAuthState;
        if (!token) return;

        const pageQuery = pageParam ? `&page=${pageParam}` : "";

        const res = await fetch(`${apiUri}${qKey}${pageQuery}`, {
          ...defaultOptions,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          return Promise.reject(
            new Error(`${res.status}`, { cause: res.statusText })
          );
        }

        return res.json();
      },
      getNextPageParam: (lastPage: any, pages) => {
        if (!lastPage) return 0;

        return parseInt(lastPage.number) + 1;
      },
      // getNextPageParam: (lastPage: any) => {
      //   return parseInt(lastPage.number) + 1;
      // },
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
      <QueryClientProvider client={queryClient}>
        <AuthProvider queryClient={queryClient} />
      </QueryClientProvider>
    </StrictMode>
  );
}

/* <ReactQueryDevtools position="bottom-right" initialIsOpen={false} /> */
