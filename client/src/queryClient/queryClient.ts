import { QueryClient } from "@tanstack/react-query";
import { defaultFetch } from "src/api/v1/defaults";
import { ILastQueryKey } from "./types";

export const apiUri = import.meta.env.VITE_API_V1_URL;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchInterval: 1000 * 60 * 10,

      queryFn: async ({ queryKey, pageParam }) => {
        const { token, filters } = queryKey.at(-1) as ILastQueryKey;

        const filterString = Object.entries(filters || {}).reduce(
          (curr, [k, v], idx) => `${curr}${!!idx ? "&" : "?"}${k}=${v}`,
          ""
        );

        const pageQuery = pageParam ? `&page=${pageParam}` : "";

        const res = await defaultFetch(
          `${queryKey[0]}${filterString}${pageQuery}`,
          { token }
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
