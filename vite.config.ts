import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/rocketshoes",
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/core/services') },
      { find: '@contexts', replacement: path.resolve(__dirname, 'src/core/contexts') }
    ],
  },
})
