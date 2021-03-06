const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');
const Setup = require('C:/Users/RyanK/Documents/ryanautomation/actions/Setup.js');
const TC_TS_AP_003 = require('C:/Users/RyanK/Documents/ryanautomation/Testcase methods/TC_TS_AP_003.js')

/* Test Domain: Studio */
/* Test report: Ryan Action Planner App */
/* Preconditions & Test Data: At least one initiative exists */
module.exports = {
    tags: ['TS_AP_003'],
    'Demo test testlab' : function (client) {
         Setup.setup(client);
         client 
  
         //open kabob [...] for any initiative
         .perform(function(){
           TC_TS_AP_003.verifyInitiativeKabob(client);
         })

         //click Delete option
         .perform(function(){
           TC_TS_AP_003.verifyInitiativeKabobDelete(client);
         })

         //Wait for confirmation modal to display
         .waitForElementVisible('/html/body/div[23]/div/div/div', 2000)

         //verify confirmation modal title and body message
         .getText('/html/body/div[23]/div/div/div/header/div/h4', function(result){
           this.assert.equal(typeof result, "object");
           this.assert.equal(result.status, 0);
           this.assert.equal(result.value, "Delete initiative?")
         })

         .getText('/html/body/div[23]/div/div/div/div/p', function(result){
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
         .perform(function(){
           TC_TS_AP_003.verifyInitiativeDeletionConfirmationDeleteButton(client);
         })

         //verify
         
         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_003 - result.png')

         //close window
         .closeWindow()


         ;
       }
  };
  
  
  