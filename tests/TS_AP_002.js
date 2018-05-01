const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');
const Setup = require('C:/Users/RyanK/Documents/ryanautomation/actions/Setup.js');
const OtherActions = require('C:/Users/RyanK/Documents/ryanautomation/actions/OtherActions.js');
const TC_TS_AP_002 = require('C:/Users/RyanK/Documents/ryanautomation/Testcase methods/TC_TS_AP_002.js')

/* TS_AP_002: verify initiative duplication */
/* Test Domain: Studio */
/* Test report: Ryan Action Planner App */
/* Preconditions & Test Data: At least one initiative exists */
module.exports = {
    tags: ['TS_AP_002'],
    'Demo test testlab' : function (client) {
         Setup.setup(client);
         client

         //TC_AP_Duplication_001: verify clicking kabob[…] on an initiave displays three options (View/Edit, Duplicate, Delete)
         .perform(function(){
             TC_TS_AP_002.verifyInitiativeKabob(client);
         })

         //TC_AP_Duplication_002: verify clicking 'Duplicate' option for kabob[…] displays a confirmation modal
         .perform(function(){
             TC_TS_AP_002.verifyInitiativeKabobDuplicate(client);
         })

         //TC_AP_Duplication_003: verify clicking 'CANCEL' button inside confirmation modal closes the modal
         .perform(function(){
             TC_TS_AP_002.verifyInitiativeDuplicationConfirmationCancelButton(client);
         })

         //open Duplication modal again
         .click(initiativePage.initiativeKabob) //open kabob on original initiative
         .click(initiativePage.initiativeKabobDuplicate) //click Duplicate option

         //TC_AP_Duplication_004: verify duplication with a name as placeholder (ie, without setting a specific value)
         .perform(function(){
             TC_TS_AP_002.verifyInitiativeDuplicationWithPlaceholderName(client);
         })

         //verify the duplicate is correctly created by checking its value
         .waitForElementVisible('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[1]', 2000)
         .getText('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[1]', function(result){
             this.assert.equal(typeof result, "object");
             this.assert.equal(result.status, 0);
             this.assert.equal(result.value, "make office crews happy (Copy)")
         })

         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_002 - duplicate created with placeholder name.png')

         //delete the duplicate for database cleanliness and consistency
         .perform(function(){
             OtherActions.deleteDuplicate(client);
         })

         //open Duplication modal again
         .click(initiativePage.initiativeKabob) //open kabob on original initiative
         .click(initiativePage.initiativeKabobDuplicate) //click Duplicate option

         //TC_AP_Duplication_005: verify duplication with user-defined name (ie, set a value different than placeholder)
         .perform(function(){
             TC_TS_AP_002.verifyInitiativeDuplicationWithDefinedName(client);
         })

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

         //delete the duplicate for database cleanliness and consistency
         .perform(function(){
             OtherActions.deleteDuplicate(client);
         })

         //screenshot result
         .saveScreenshot('./Result Screenshots/TS_AP_002 - duplicate deleted.png')

         //close window
         .closeWindow()
         

         ;
       }
  };
  
  
  