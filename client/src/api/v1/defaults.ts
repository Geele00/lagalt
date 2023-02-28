export const apiUrl = import.meta.env.VITE_API_V1_URL;

export const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};
