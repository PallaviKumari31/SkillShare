import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server:{
        proxy:{
          '/api': 'http://localhost:8002'
        }
      },
    plugins: [react()],
    // No need to specify postcss here unless using a custom path

});
