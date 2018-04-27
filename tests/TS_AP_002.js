const loginPage = require('./locators_loginPage.js');

module.exports = {
    tags: ['TS_AP_002'],
    'Demo test testlab' : function (browser) {
         browser 
  
         /*Test Domain: Studio*/
         /*Test report: Ryan Action Planner App*/
         //go to Horizon home page
         .url('https://mob.testlab.firmglobal.net/home/') 
         .maximizeWindow()
         .waitForElementVisible(loginPage.account,5000)
         .setValue(loginPage.account, 'RyanK_Pros')
         .setValue(loginPage.password, 'Goomin88')
         .click(loginPage.submitButton)
  
         //go into studio
         .useXpath()
         .waitForElementVisible('//*[@id="root"]/div/main/section/div[2]/div[1]/section/div/ol/li[12]/div/a/div[1]/div/div',8000)
         .click('//*[@id="root"]/div/main/section/div[2]/div[1]/section/div/ol/li[12]/div/a/div[1]/div/div')

         //go into Ryan Action Planner App
         .waitForElementVisible('//*[@id="root"]/div/div/div/div/main/table/tbody/tr[11]/td[1]/span/a',8000)
         .click('//*[@id="root"]/div/div/div/div/main/table/tbody/tr[11]/td[1]/span/a')

         //minimize editor
         .pause(4000) //Widget does not load when editor is minimized before page loads. Give explicit pause. WaitForElementVisible() will not work.
         .click('//*[@id="root"]/div/div/div/div/section/div/div[1]/div/div[1]/div[1]/span[2]/span[2]')
         .pause(1500) //Give extra one second while editor shrinks

         //TC_AP_Duplication_001: verify clicking kabob[…] on an initiave displays three options (View/Edit, Duplicate, Delete)
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/button')

         //TC_AP_Duplication_002: verify clicking 'Duplicate' option for kabob[…] displays a confirmation modal
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/ul/li[2]/button/div')

         //TC_AP_Duplication_003: verify clicking 'CANCEL' button inside confirmation modal closes the modal
         .click('/html/body/div[22]/div/div/div/div/footer/button[1]')
         .pause(1000) //wait while modal closes

         //open Duplication modal again
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/button') //open kabob on original initiative
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/ul/li[2]/button/div') //click Duplicate option

         //TC_AP_Duplication_004: verify duplication with a name as placeholder (ie, without setting a specific value)
         .waitForElementVisible('/html/body/div[22]/div/div/div', 8000)
         .click('/html/body/div[22]/div/div/div/div/footer/button[2]/span') //click DUPLICATE button

         //verify the duplicate is correctly created by checking its value
         .waitForElementVisible('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[1]', 2000)
         .getText('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[1]', function(result){
             this.assert.equal(typeof result, "object");
             this.assert.equal(result.status, 0);
             this.assert.equal(result.value, "make office crews happy (Copy)")
         })

         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_002 - duplicate created with placeholder name.png')

         /* delete the duplicate for database cleanliness and consistency */
         /* commnet this block out if database consistency is not a concern */
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[2]/div/button') //click kabob on duplicate
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[2]/div/ul/li[3]/button/div') //click delete option
         .pause(500) //Widget has a glitch if DELETE button is clicked too early (deletion works fine but initiative list does not update). Give 0.5 second pause
         .click('/html/body/div[22]/div/div/div/footer/button[2]/span') //click DELETE button
         .pause(500) //wait while modal closes

         //open Duplication modal again
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/button') //open kabob on original initiative
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/ul/li[2]/button/div') //click Duplicate option

         //TC_AP_Duplication_005: verify duplication with user-defined name (ie, set a value different than placeholder)
         .waitForElementVisible('/html/body/div[22]/div/div/div', 8000)
         .clearValue('//*[@id="initiative-name"]')
         .setValue('//*[@id="initiative-name"]', "make office crews happier")
         .pause(500)
         .click('/html/body/div[22]/div/div/div/div/footer/button[2]/span') //click DUPLICATE button

         //verify the duplicate is correctly created by checking its value
         .pause(500)
         .waitForElementVisible('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[1]/td[1]', 2000)
         .getText('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[1]/td[1]', function(result){
             this.assert.equal(typeof result, "object");
             this.assert.equal(result.status, 0);
             this.assert.equal(result.value, "make office crews happier")
         })

         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_002 - duplicate created with a name.png')

         /* delete the duplicate for database cleanliness and consistency */
         /* commnet this block out if database consistency is not a concern */
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/div/button') //click kabob on duplicate
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/div/ul/li[3]/button/div') //click delete option
         .pause(500) //Widget has a glitch if DELETE button is clicked too early (deletion works fine but initiative list does not update). Give 0.5 second pause
         .click('/html/body/div[22]/div/div/div/footer/button[2]/span') //click DELETE button
         .pause(500) //wait while modal closes

         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_002 - duplicate deleted.png')

         //close window
         .closeWindow()
         

         ;
       }
  };
  
  
  