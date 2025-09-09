import { defineConfig } from 'vitest/config'; // <-- вот так!
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8', // можно 'istanbul'
      reporter: ['text', 'html'], // текст в консоли + html отчёт
      reportsDirectory: './coverage', // папка для отчётов
    },
  },
});
