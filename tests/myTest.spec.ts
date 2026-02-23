import test, { expect } from "playwright/test";

test.beforeEach(async({page})=>{
  await page.route('**/*', route => {
    const url = route.request().url();
      if (
          url.includes('doubleclick.net') ||
          url.includes('googlesyndication.com') ||
          url.includes('adservice.google.com') ||
          url.includes('facebook.net') ||
          url.includes('googlesyndication') ||
          url.includes('google-analytics') ||
          url.includes('gtm.js') ||
          url.includes('facebook') ||
          url.includes('hotjar') ||
          url.includes('segment') ||
          url.includes('clarity') ||
          url.includes('mixpanel')
      ) {
          return route.abort();
      }
      route.continue();
      });
})

test('Test Case 1',async({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveURL('https://automationexercise.com/');
    
});

