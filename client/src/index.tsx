import "./assets/index.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "./api/v1/defaults";
import { AuthProvider } from "./auth/Auth.Provider";

const apiUri = import.meta.env.VITE_API_V1_URL;

interface ILastQueryKey {
  filters?: {
    [key: string]: string;
  };
  token?: string;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,

      queryFn: async ({ queryKey, pageParam }) => {
        const lastQueryKey = queryKey.at(-1) as ILastQueryKey;

        const token = lastQueryKey?.token;

        let filterString = "";

        if (!!lastQueryKey.filters) {
          for (const [k, v] of Object.entries(lastQueryKey.filters)) {
            const prefix = filterString.length === 0 ? "?" : "&";
            filterString += `${prefix}${k}=${v}`;
          }
        }

        const pageQuery = pageParam ? `&page=${pageParam}` : "";

        const res = await fetch(
          `${apiUri}${queryKey[0]}${filterString}${pageQuery}`,
          {
            ...defaultOptions,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          return Promise.reject(
            new Error(`${res.status}`, { cause: res.statusText })
          );
        }

        return res.json();
      },
      getNextPageParam: (lastPage: any) =>
        lastPage ? parseInt(lastPage.pageNumber) + 1 : 0,
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
