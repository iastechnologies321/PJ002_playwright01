import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
 
  retries: 2,

  workers: undefined,
  
  reporter: 'html',
  
  use: {
   
    headless:false,
    trace: 'on-first-retry',
  },

  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],


});
