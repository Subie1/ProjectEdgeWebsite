import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: `http://localhost:${process.env.BACKEND_PORT || 3333}`,
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, "")
            },
            "/user": {
                target: "https://dashboard.botghost.com/api/public/tools/user_lookup",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/user/, "")
            }
        }
    }
})