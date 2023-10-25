import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
import { compression } from 'vite-plugin-compression2'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),compression(),splitVendorChunkPlugin()],
})
