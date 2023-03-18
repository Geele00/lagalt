export const apiUrl = import.meta.env.VITE_API_V1_URL;

// Mener det er default i fetch så unødvendig å ha med
export const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};
