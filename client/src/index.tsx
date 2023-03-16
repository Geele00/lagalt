import "./assets/index.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "./api/v1/defaults";
import { AuthProvider } from "./auth/Auth.Provider";

const apiUri = import.meta.env.VITE_API_V1_URL;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,

      queryFn: async ({ queryKey, pageParam, meta }) => {
        const token = meta?.token;

        const metaParams = meta?.params ?? "";
        const pageQuery = pageParam ? `&page=${pageParam}` : "";

        const [qKey] = queryKey;

        const res = await fetch(`${apiUri}${qKey}${metaParams}${pageQuery}`, {
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
      getNextPageParam: (lastPage: any) => {
        if (!lastPage) return 0;

        return parseInt(lastPage.number) + 1;
      },
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
