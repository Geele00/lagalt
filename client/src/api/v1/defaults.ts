export const apiUrl = import.meta.env.VITE_API_V1_URL;

interface IFetch {
  token?: string;
  method?: string;
  opts?: RequestInit;
}

export const defaultFetch = async (
  path: string,
  { token, method, opts }: IFetch
) => {
  return await fetch(`${apiUrl}${path}`, {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...opts,
  });
};
