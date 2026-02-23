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
    // await page.goto('https://demo.automationtesting.in/Register.html'); 
    // await page.locator('[value="Male"]').click();
    // await page.screenshot({path:'./screenshots/radioButton01.png'});
    

    // checkBoxes
    // await page.goto('https://demo.automationtesting.in/Register.html'); 
    // await page.locator('#checkbox1').check();
    // let isCricketChecked = await page.locator('#checkbox1').isChecked();
    // console.log(isCricketChecked);
    // if(isCricketChecked){
    //     await page.screenshot({path:'./screenshots/checkbox01.png'});
    // }
    
    // upload 
        // // Approach 1 - 
        // await page.goto('https://demo.automationtesting.in/Register.html'); 
        // // await page.locator('#imagesrc').setInputFiles('./screenshots/dropdown01.png');
        // // await page.screenshot({path:'./screenshots/upload01.png'});
        // // await page.waitForTimeout(5000);
       
        // // Approach 2 -
        // const uploadPromise = page.waitForEvent('filechooser')
        // await page.locator('#imagesrc').click();
        // let resolveUpload = await uploadPromise;
        // await resolveUpload.setFiles('./screenshots/dropdown01.png')
        // await page.screenshot({path:'./screenshots/upload02.png'});
        // await page.waitForTimeout(5000);


     // drag and drop 
        // await page.goto('https://demo.automationtesting.in/Static.html');
        // let source01 = page.locator('#angular');
        // let source02 = page.locator('#mongo');
        // let source03 = page.locator('#node');    
        // let destination = page.locator('div#droparea')

        // await source01.dragTo(destination)
        // await page.screenshot({path:'./screenshots/dragAndDrop01.png'});
        // await source02.dragTo(destination)
        // await page.screenshot({path:'./screenshots/dragAndDrop02.png'});
        // await source03.dragTo(destination)
        // await page.screenshot({path:'./screenshots/dragAndDrop03.png'});

    // alerts - 
        await page.goto('https://demo.automationtesting.in/Alerts.html');
        await page.locator('a[href="#OKTab"]').click();    
        let message = "";
        page.on('dialog',(alert)=>{
            message = alert.message();
            console.log(message);
            alert.accept()
        })
        await page.locator('.btn.btn-danger').click(); 
        await expect(message).toEqual('I am an alert box!') 
        await page.screenshot({path:'./screenshots/alert01.png'});
    });



    // assignment - 
    // https://demo.automationtesting.in/Dynamic.html








