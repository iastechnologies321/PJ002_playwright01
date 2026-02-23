  // await page.locator('[href="/login"]').click();
    // await page.screenshot({path:'screenshots/screenshot1.jpg'})
    // await page.locator('[data-qa="login-email"]').screenshot({path:'screenshots/screenshot2.jpg'})
    // await page.screenshot({path:'screenshots/screenshots3.jpg',fullPage:true});


    // work with drag and drop
        // await page.goto('https://demo.automationtesting.in/Static.html');
        // let item1 =  page.locator('[src="logo.png"]');
        // let item2 =  page.locator('[id="mongo"]');
        // let item3 = page.locator('[id="node"]');
        // let item4 = page.locator('[id="droparea"]');
        // await item1.dragTo(item4);
        // await item2.dragTo(item4);
        // await item3.dragTo(item4);
        // await page.screenshot({path:'./screenshots/dragAndDrop.png'});

    // work with dropdowns
        // await page.locator('[id="Skills"]').selectOption('Adobe InDesign');
        // await page.waitForTimeout(5000);
        // await page.locator('[id="Skills"]').selectOption('Engineering');
        // const skills = await page.locator('[id="Skills"] > option').allTextContents();
        // console.log(skills);

    // work with alerts
        // await page.goto('https://demo.automationtesting.in/Alerts.html');
        // let alertsListTab1 =  page.locator('[href="#OKTab"]')
        // let alertsListTab2 =  page.locator('[href="#CancelTab"]')
        // let alertsListTab3 =  page.locator('[href="#Textbox"]')

        // let alertButton1 =  page.locator('[id="OKTab"] > button')
        // let alertButton2 =  page.locator('[id="CancelTab"] > button')
        // let alertButton3 =  page.locator('[id="Textbox"] > button')
   
        //scenario 1
            // await alertsListTab1.click();
            // page.on('dialog', async (dialog)=>{
            //     console.log(dialog.message());
            //     console.log(dialog.type());
            //     await dialog.accept();
            // })
            // await alertButton1.click();
            // await page.screenshot({path:'./screenshots/alerts.png'});
        
        // //scenario 2
            // await alertsListTab2.click();
            // page.on('dialog', async (dialog)=>{
            //     console.log(dialog.message());
            //     console.log(dialog.type());
            //     await dialog.dismiss();
            // })
            // await alertButton2.click();
            // await page.screenshot({path:'./screenshots/alerts2.png'});

        //scenario 3
            // await alertsListTab3.click();
            // page.on('dialog', async (dialog)=>{
            //     console.log(dialog.message());
            //     console.log(dialog.type());
            //     // await dialog.dismiss();
            //     await dialog.accept('Nirvan');
            // })
            // await alertButton3.click();
            // await page.screenshot({path:'./screenshots/alerts3.png'});
            // await expect(page.locator('[id="demo1"]')).toHaveText('Hello Prashatn How are you today')

            
    // work with iframes 
        
        // Single frames
        // await page.goto('https://demo.automationtesting.in/Frames.html');
        // // await page.getByRole("textbox").fill('iframe'); // Not work
        // await page.frameLocator('#singleframe').getByRole("textbox").fill('iframe');
        // await page.screenshot({path:'./screenshots/iframes.png'});
        
        // // Nested frames
        // await page.goto('https://demo.automationtesting.in/Frames.html');
        // await page.locator('[href="#Multiple"]').click()
        // // await page.getByRole("textbox").fill('iframe'); // Not work
        // await page.frameLocator('[src="MultipleFrames.html"]').frameLocator('[src="SingleFrame.html"]').getByRole("textbox").fill('iframe');
        // await page.screenshot({path:'./screenshots/multipleIframes.png'});
      
        
    // work with radio buttons/check boxes
        // let feMaleRadioBtn = page.locator('[value="FeMale"]');
        // let maleRadioBtn = page.locator('[value="Male"]');

        // await maleRadioBtn.click();
        // console.log(await maleRadioBtn.isChecked());
        // await feMaleRadioBtn.check();
        // console.log(await maleRadioBtn.isChecked());


        // let cricketCheckbox = page.locator('[value="Cricket"]');
        // let moviesCheckbox = page.locator('[value="Movies"]');
        // let hockeyCheckbox = page.locator('[value="Hockey"]');
        
        // await cricketCheckbox.check();
        // console.log(await cricketCheckbox.isChecked());
        // await cricketCheckbox.setChecked(true);
        // await cricketCheckbox.setChecked(false);
        // await cricketCheckbox.uncheck();
        // await moviesCheckbox.check();
        // console.log(await moviesCheckbox.isChecked());
        // await moviesCheckbox.setChecked(true);
        // await moviesCheckbox.setChecked(false);
        // await moviesCheckbox.uncheck();
        // await hockeyCheckbox.check();
        // console.log(await hockeyCheckbox.isChecked());
        // await hockeyCheckbox.setChecked(true);
        // await hockeyCheckbox.setChecked(false);
        // await hockeyCheckbox.uncheck();

    // work with windows 
        //  await page.goto('https://demo.automationtesting.in/Windows.html');
        //     let tab1 = page.locator('[href="#Tabbed"]');
        //     let tab2 = page.locator('[href="#Seperate"]');
        //     let tab3 = page.locator('[href="#Multiple"]');

        //     let clickWindowButton1 = page.locator('[href="http://www.selenium.dev"]');
        //     let clickWindowButton2 = page.locator('[class="btn btn-primary"]');
        //     let clickWindowButton3 = page.locator('[id="Seperate"] > button');

        
            // Scenario 1 
                // tab1.click();
                // const [newPage1] = await Promise.all([
                //     page.waitForEvent('popup'),
                //     clickWindowButton1.click()
                // ])
                // await newPage1.locator('[href="/downloads"]').click();
                // await newPage1.screenshot({path:'./screenshots/newPageLoaded1.png'});
        
            // Scenario 2
                // tab2.click();
                // const [newPage2] = await Promise.all([
                //     page.waitForEvent('popup'),
                //     clickWindowButton2.click()
                // ])
                // await newPage2.locator('[href="/downloads"]').click();
                // await newPage2.screenshot({path:'./screenshots/newPageLoaded2.png'});

            // Scenario 3
                // tab3.click();
                // const [newPage3] = await Promise.all([
                //     page.waitForEvent('popup'),
                //     clickWindowButton3.click()
                // ])
                // await newPage3.locator('[href="/downloads"]').click();
                // await newPage3.screenshot({path:'./screenshots/newPageLoaded3.png'});

    // work with downloads    
    //     await page.goto('https://demo.automationtesting.in/FileDownload.html');
    
    //     way 1 - 
    //     const downloadPromise = page.waitForEvent('download');
    //     await page.locator('.btn-primary').click()
    //     const download = await downloadPromise;
    //     await download.saveAs('./downloads/' + download.suggestedFilename());

        // way 2 - 
        // const [download] = await Promise.all([
        //     page.waitForEvent('download'), 
        //     await page.locator('.btn-primary').click(),
        // ])
        // await download.saveAs('./downloads/' + download.suggestedFilename());
        
    // Visual testing -- 
        // await page.goto('https://playwright.dev/');
        // // await expect(page).toHaveScreenshot('Test-Case-1-1-chromium-darwin.png',{maxDiffPixelRatio:0.01});
        // await expect(page.locator('.navbar--fixed-top')).toHaveScreenshot('screenshots/navbar.png',{maxDiffPixelRatio:0.01});


    // keyboard ops - 
        // await page.goto('https://playwright.dev/');
        // await page.locator('.DocSearch-Button-Placeholder').click();
        // await page.keyboard.type('Playwright');
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(5000);


    
    // State Storage - 
        // await page.goto('https://automationexercise.com/');
        // await page.locator('[href="/login"]').click();
        // await page.locator('[data-qa="login-email"]').fill('iastechnologies321@gmail.com');
        // await page.locator('[data-qa="login-password"]').fill('iastechnologies321');
        // await page.locator('[data-qa="login-button"]').click();
        // await page.waitForLoadState('load');
        // await page.waitForTimeout(5000);
        // await page.context().storageState({ path:'.auth/loginState.json'});

    // 
    





    // test('test case 2', {tag:['@smoke','@regression', '@sanity']},async({page}, testInfo) => { 
    //     console.log('test Case 2');
    //     console.log(testInfo.title);
    //     // const downloadPromise = page.waitForEvent('download');
    //     // await page.locator('').click();
    //     // let downlaod = await downloadPromise;
    //     // await downlaod.saveAs('./download'+ downlaod.suggestedFilename());
    //  })

test('Dropdowns',async({page})=>{
  await page.goto('https://automationexercise.com/');
})