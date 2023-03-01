import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }): any => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
      },
    },
    // server: {
    //   watch: {
    //     usePolling: true,
    //   },
    //   host: true,
    //   strictPort: true,
    //   port: `${command === "serve" ? 5173 : 80}`,
    // },
  };
});
