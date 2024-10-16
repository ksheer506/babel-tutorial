import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import plugin from "./src/@babel/tutorial.ts"


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [plugin],
      },
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(import.meta.dirname, "src") }],
  },
})
