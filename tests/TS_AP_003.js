module.exports = {
    tags: ['TS_AP_003'],
    'Demo test testlab' : function (browser) {
         browser 
  
         /*Test Domain: Studio*/
         /*Test report: Ryan Action Planner App*/
         //go to Horizon home page
         .url('https://mob.testlab.firmglobal.net/home/') 
         .maximizeWindow()
         .waitForElementVisible('input[class=username-input]',5000)
         .setValue('input[class=username-input]', 'RyanK_Pros')
         .setValue('input[class=password-input]', 'Goomin88')
         .click('input[id=btnlogin]')
  
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

         //open kabob [...] for any initiative
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/button')

         //click Delete option
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/ul/li[3]/button/div')

         //Wait for confirmation modal to display
         .waitForElementVisible('/html/body/div[22]/div/div/div', 2000)

         //verify confirmation modal title and body message
         .getText('/html/body/div[22]/div/div/div/header/div/h4', function(result){
           this.assert.equal(typeof result, "object");
           this.assert.equal(result.status, 0);
           this.assert.equal(result.value, "Delete initiative?")
         })

         .getText('/html/body/div[22]/div/div/div/div/p', function(result){
           this.assert.equal(typeof result, "object");
           this.assert.equal(result.status, 0);
           this.assert.equal(result.value, "Are you sure you want to delete this initiative?");
         })

         /* Testing CANCEL button - BUG
         //click CANCEL button
         .click('/html/body/div[22]/div/div/div/footer/button[1]/span')
         
         //open kabob [...] for any initiative
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/button')

         //click Delete option
         .click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr/td[2]/div/ul/li[3]/button/div')

         //Wait for confirmation modal to display
         .waitForElementVisible('/html/body/div[22]/div/div/div', 2000) */

         //click DELETE button
         .click('/html/body/div[22]/div/div/div/footer/button[2]/span')
         
         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_003 - result.png')

         //close window
         .closeWindow()


         ;
       }
  };
  
  
  