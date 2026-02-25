import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
 
  retries: 0,

  workers: undefined,
  
  reporter: 'html',
  
  use: {
   launchOptions:{
    args:["--start-maximized"],
   },
    headless:false,
    trace: 'on-first-retry',
    // storageState: './auth/login.json'
  },

  
  projects: [
    {
      name: 'chromium',
      use: { 
        // ...devices['Desktop Chrome'],
      viewport:null
      },
    },

  ],


});
