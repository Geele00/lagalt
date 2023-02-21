import "./assets/index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { initializeApp } from "firebase/app";

import { router } from "./router";
import { AuthProvider } from "./auth/AuthProvider";
import { apiUrl } from "./api/v1";

const firebaseConfig = {
  apiKey: "AIzaSyAOkmeiUE96UKSy-Io51pDLFCHUEQflrLU",
  authDomain: "lagalt-app-case.firebaseapp.com",
  projectId: "lagalt-app-case",
  storageBucket: "lagalt-app-case.appspot.com",
  messagingSenderId: "325474303253",
  appId: "1:325474303253:web:8c5dc4b73b53723318fd1c",
  measurementId: "G-LD3S9ZSC4C",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const res = await fetch(`${apiUrl}${queryKey[0]}`);
        if (!res.ok) {
          throw new Error("Network error.");
        }
        return res.json();
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
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
