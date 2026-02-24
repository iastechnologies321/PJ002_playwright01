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
        // await page.goto('https://demo.automationtesting.in/Alerts.html');
        // await page.locator('a[href="#OKTab"]').click();    
        // let message = "";
        // page.on('dialog',(alert)=>{
        //     message = alert.message();
        //     console.log(message);
        //     alert.accept()
        // })
        // await page.locator('.btn.btn-danger').click(); 
        // await expect(message).toEqual('I am an alert box!') 
        // await page.screenshot({path:'./screenshots/alert01.png'});


        // alert with text box
        // await page.goto('https://demo.automationtesting.in/Alerts.html');
        // await page.locator('a[href="#Textbox"]').click();    
        // let name = 'Nirvan';
        // page.on('dialog',(alert)=>{
        //     console.log(alert.message());
        //     alert.accept(name)
        // });
        // await page.locator('#Textbox button').click();

        // await page.screenshot({path:'./screenshots/alert03.png'});
        // await expect(page.locator('#demo1')).toHaveText(`Hello ${name} How are you today`);


        // downlaods
        // Way - 1
        // await page.goto('https://demo.automationtesting.in/FileDownload.html');
        // let downloadPromise = page.waitForEvent('download');
        // await page.locator('.btn.btn-primary').click();
        // let download = await downloadPromise;
        // await download.saveAs(`./downloads/${download.suggestedFilename()}`)
        // await page.screenshot({path:'./screenshots/download01.png'});

        // Way 2 - 
    //     await page.goto('https://demo.automationtesting.in/FileDownload.html');
    //     const [download] = await Promise.all([
    //         page.waitForEvent('download'),
    //         page.locator('.btn.btn-primary').click()
    //     ]
    // )
    //     await download.saveAs(`./downloads/${download.suggestedFilename()}`)
    //     await page.screenshot({path:'./screenshots/download02.png'});


    // state storage
        // await page.goto('https://automationexercise.com/');
        // await expect(page).toHaveURL('https://automationexercise.com/');
        // await page.waitForTimeout(10000);
        
        // await page.locator('[href="/login"]').click();
        // await page.locator('[data-qa="login-email"]').fill('iastechnologies321@gmail.com');
        // await page.locator('[data-qa="login-password"]').fill('iastechnologies321');
        // await page.locator('[data-qa="login-button"]').click();
        // await page.waitForURL('https://automationexercise.com/');
        // await page.context().storageState({path:"./auth/login.json"})


    // frames
        await page.goto('https://demo.automationtesting.in/Frames.html');
        await page.frameLocator('#singleframe').locator('input[type="text"]').first().fill('I am inside Frame');
        await page.screenshot({path:'./screenshots/frames01.png'});

    });
















    // assignment - 
    // https://demo.automationtesting.in/Dynamic.html
    // https://demo.automationtesting.in/Frames.html
    // https://demo.automationtesting.in/Frames.html








