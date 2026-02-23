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
    // await page.goto('https://automationexercise.com/');
    // await expect(page).toHaveURL('https://automationexercise.com/');
    // await page.locator('[href="/login"]').click();
    // // take screenshot
    // await page.screenshot({path:'./screenshots/image001.png'});
    // await page.locator('[data-qa="login-email"]').screenshot({path:'./screenshots/image002.png'});
    // await page.locator('[href="/products"]').click();
    // await page.waitForLoadState('load');
    // await page.screenshot({path:'./screenshots/image003.png',fullPage:true});

    // dropdowns
    // await page.goto('https://demo.automationtesting.in/Register.html'); 
    // await page.locator('#Skills').selectOption('C++')
    // await page.screenshot({path:'./screenshots/dropdown01.png'});


    // radio buttons 
    await page.goto('https://demo.automationtesting.in/Register.html'); 
    await page.locator('[value="Male"]').click();
    await page.screenshot({path:'./screenshots/radioButton01.png'});
    

    // checkBoxes
    await page.goto('https://demo.automationtesting.in/Register.html'); 
    await page.locator('#checkbox1').check();
    await page.screenshot({path:'./screenshots/checkbox01.png'});
    
    
    
});

