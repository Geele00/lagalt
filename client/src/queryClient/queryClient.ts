import { QueryClient } from "@tanstack/react-query";
const apiUri = import.meta.env.VITE_API_V1_URL;
import { defaultOptions } from "../api/v1/defaults";
import { ILastQueryKey } from "./types";

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
            return Promise.reject<string>(
              new Error(`${res.statusText}`, {
                cause: { code: res.status },
              })
            );
          }
  
          return res.json();
        },
        getNextPageParam: (lastPage: any) =>
          lastPage ? parseInt(lastPage.pageNumber) + 1 : 0,
      },
    },
  });