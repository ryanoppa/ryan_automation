const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');
const Setup = require('C:/Users/RyanK/Documents/ryanautomation/actions/Setup.js');
const TC_TS_AP_001 = require('C:/Users/RyanK/Documents/ryanautomation/Testcase methods/TC_TS_AP_001.js')

/* TS_AP_001: verify initiative creation */
/* Test Domain: Studio */
/* Test report: Ryan Action Planner App */
/* Preconditions & Test Data: At least one report exists */
module.exports = {
  tags: ['TS_AP_001'],
  'Demo test testlab' : function (client) {
       Setup.setup(client);
       client 

       //verify all static/dynamic elements are present
       //verify dashboard header elements and text: 1)Total Initiatives 2)Active Initiatives 3)Closed Initiatives
       .waitForElementVisible(initiativePage.totalInitiatives, 8000)
       .getText(initiativePage.totalInitiatives, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Total Initiatives");
       })

       .waitForElementVisible(initiativePage.activeInitiatives, 8000)
       .getText(initiativePage.activeInitiatives, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Active Initiatives");
       })

       .waitForElementVisible(initiativePage.closedInitiatives, 8000)
       .getText(initiativePage.closedInitiatives, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Closed");
       })

       //verify initiatives list header element and text
       .waitForElementVisible(initiativePage.InitiativesListHeader, 8000)
       .getText(initiativePage.InitiativesListHeader, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Initiatives");
       })

       //TC_AP_Creation_001: verify New Initiatives button displays initiative creation modal
       .perform(function(){
         TC_TS_AP_001.verifyNewInitiativeButton(client);
       })

       //TC_AP_Creation_002: verify Initiative Name field
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeNameField(client);
       })

       //TC_AP_Creation_003: verify Description field
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeDescriptionField(client);
       })

       //TC_AP_Creation_004: verify Source dropdown. Select survey: Confirmit Vancouver - customer satisfaction
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeSourceDropdown(client);
       })

       //TC_AP_Creation_005: verify Question dropdown. Select question: Last device used
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeQuestionDropdown(client);
       })
       
       /*TC_AP_Creation_006: BUG
       //click add collaborators button and select 2nd choice
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[1]')
       .waitForElementVisible('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[4]/div/div[2]/div[1]/div/label', 2000)
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[4]/div/div[2]/div[1]/div/label')
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[5]/button[2]') */

       //TC_AP_Creation_009: verify Next button
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeNextButtonPageOne(client);
       })

       //TC_AP_Creation_010: verify add action
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeAddAction(client);
       })

       /*TC_AP_Creation_011: BUG
       //select an existing action
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/label/svg') */

       //TC_AP_Creation_012: verify Next button
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeNextButtonPageTwo(client);
       })

       //TC_AP_Creation_013: verify Statistic dropdown. Set statistic: Segment %, Generic
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeStatisticDropdown(client);
       })

       //TC_AP_Creation_014: verify Interval dropdown. Set interval: Last 6 months rolling
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeIntervalDropdown(client);
       })

       //TC_AP_Creation_015: verify Rule dropdown. Set rule: <
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeRuleDropdown(client);
       })
       
       //TC_AP_Creation_016: verify Goal field. Set goal: 7
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeGoalField(client);
       })

       //TC_AP_Creation_017: verify Threshold field. Set Threshold: 5
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeThresholdField(client);
       })
       
       //TC_AP_Creation_018: verify action dropdown. Select 2
       //This field is dynamic. Tester can omit this tase case
       .click('/html/body/div[17]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[2]/div[1]')
       .click('/html/body/div[17]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[4]/div/div[1]/div[2]/div[1]/div/label') //select 2
       .click('/html/body/div[17]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[4]/div/div[2]/button[1]') //Apply button
       
       //TC_AP_Creation_019: verify Save button. Click Save button
       .perform(function(){
         TC_TS_AP_001.verifyInitiativeSaveButton(client);
       })

       //verify correct confirmation message is displayed by checking: message title and body
       //After clicking Save button, wait for the confirmation modal to popup before checking elements in the modal. Or, give appx 2 seconds explicit pause
       .waitForElementVisible('/html/body/div[21]/div/div/div', 8000) //confirmation modal element
       .getText(initiativePage.initiativeCreationConfirmationTitle, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Your initiative has been started!");
       })

       .getText(initiativePage.initiativeCreationConfirmationBody, function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "You can view the status of your initiative now or return to it later in the Initiatives area.");
       })

       //click View Initiative button
       .click(initiativePage.initiativeCreationConfirmationViewInitiativeButton)

       //verify all information is correct by checking initiative details
       //wait while page loads
       .waitForElementVisible('//*[@id="root"]/section/article[1]/div/div[1]/div[1]/p', 8000) //widget title

       //Expand Details tab
       .click(initiativePage.initiativeDetailTab)
       .pause(500) //wait while tab expands
       
       //verify title
       .getText(initiativePage.initiativeDetailTitle, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "make office crews happy");
      })

      //verify Description: office crews are not happy any more
      .waitForElementVisible(initiativePage.initiativeDetailDescription, 8000)
      .getText(initiativePage.initiativeDetailDescription, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "office crews are not happy anymore");
      })

      //verify Source: Confirmit Vancouver - customer satisfaction
      .getText(initiativePage.initiativeDetailSource, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "Confirmit Vancouver - customer satisfaction");
      })

      //verify Question: Lastdevicetype Last device used
      .getText(initiativePage.initiativeDetailQuestion, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "lastdevicetype Last device used");
      })

      //verify Statistic: Segment
      .getText(initiativePage.initiativeDetailStatistic, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "Segment");
      })

      //verify Action: buy more coke
      .getText('//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]', function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "2");
      })

      //verify Interval: Last 6 months rolling
      .getText(initiativePage.initiativeDetailInterval, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "Last 6 months rolling");
      })

      //verify Goal: <7
      .getText(initiativePage.initiativeDetailGoal, function(result){
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, "<7");
      })

      //screenshot result
      .saveScreenshot('./Result Screenshots/TS_AP_001 - result.png')

      //close window
      .closeWindow()

      ;
     }
};


