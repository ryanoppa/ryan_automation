const loginPage = require('./locators_loginPage.js');
const initiativePage = require('./locators_initiativePage.js');

module.exports = {
  tags: ['TS_AP_001'],
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
      .pause(4000) //Widget does not load when editor is minimized before page is fully loaded. Give explicit pause. WaitForElementVisible() will not work.
      .click('//*[@id="root"]/div/div/div/div/section/div/div[1]/div/div[1]/div[1]/span[2]/span[2]')
      .pause(1500) //Give extra one second while editor shrinks

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
       .waitForElementVisible(initiativePage.newInitiativeButton, 8000)
       .click(initiativePage.newInitiativeButton)

       //TC_AP_Creation_002: verify Initiative Name field
       .waitForElementVisible(initiativePage.initiativeName, 8000)
       .setValue(initiativePage.initiativeName, "make office crews happy")

       //TC_AP_Creation_003: verify Description field
       .setValue(initiativePage.initiativeDescription, "office crews are not happy anymore")

       //TC_AP_Creation_004: verify Source field. Select survey: Confirmit Vancouver - customer satisfaction
       .click(initiativePage.initiativeSource)
       .click('/html/body/div[16]/div/div/div/div/div[2]/div/div[3]/div/div[4]/div/ul/li/div/div/span/span[2]')

       //TC_AP_Creation_005: verify Question field. Select question: Last device used
       .click(initiativePage.initiativeQuestion)
       .waitForElementVisible(initiativePage.initiativeQuestionSelection, 2000)
       .click(initiativePage.initiativeQuestionSelection)
       
       /*TC_AP_Creation_006: bug not fixed
       //click add collaborators button and select 2nd choice
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[1]')
       .waitForElementVisible('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[4]/div/div[2]/div[1]/div/label', 2000)
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[4]/div/div[2]/div[1]/div/label')
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[6]/div[3]/div[5]/button[2]') */

       //TC_AP_Creation_009: verify Next button
       .waitForElementVisible(initiativePage.initiativeNextButtonPageOne, 2000)
       .pause(1000) //Need to pause. Collaborator modal closes slowly, causing selenium not being able to click Next button. 
       .click(initiativePage.initiativeNextButtonPageOne)

       //TC_AP_Creation_010: verify add action
       .setValue(initiativePage.initiativeAddActionTextBox, "Buy more diet coke")
       .click(initiativePage.initiativeAddActionAddButton)

       /*TC_AP_Creation_011: BUG
       //select an existing action
       .click('/html/body/div[21]/div/div/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/label/svg') */

       //TC_AP_Creation_012: verify Next button
       .click(initiativePage.initiativeNextButtonPageTwo)

       //TC_AP_Creation_013: verify Statistic dropdown. Set statistic: Segment %, Generic
       .click(initiativePage.initiativeStatistic)
       .click(initiativePage.initiativeStatisticSegment)
       .click(initiativePage.initiativeStatisticSegmentGeneric)
       .click(initiativePage.initiativeStatisticApplyButton)

       //TC_AP_Creation_014: verify Interval dropdown. Set interval: Last 6 months rolling
       .click(initiativePage.initiativeInterval)
       .click(initiativePage.initiativeIntervalSixMonths)

       //TC_AP_Creation_015: verify Rule dropdown. Set rule: <
       .click(initiativePage.initiativeRule)
       .click(initiativePage.initiativeRuleLessThan)
       
       //TC_AP_Creation_016: verify Goal field. Set goal: 7
       .setValue(initiativePage.initiativeGoal, "7")

       //TC_AP_Creation_017: verify Threshold field. Set Threshold: 5
       .setValue(initiativePage.initiativeThreshold, "5")
       
       //TC_AP_Creation_018: verify action dropdown. Select 2
       .click('/html/body/div[16]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[2]/div[1]')
       .click('/html/body/div[16]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[4]/div/div[1]/div[2]/div[1]/div/label') //select 2
       .click('/html/body/div[16]/div/div/div/div/div[2]/div/div[5]/div/div/div/div[4]/div/div[2]/button[1]') //Apply button
       
       //TC_AP_Creation_019: verify Save button. Click Save button
       .click(initiativePage.initiativeSaveButton)

       //verify correct confirmation message is displayed by checking: message title and body
       //After clicking Save button, wait for the confirmation modal to popup before checking elements in the modal. Or, give appx 2 seconds explicit pause
       .waitForElementVisible('/html/body/div[20]/div/div/div/div', 8000) //confirmation modal element
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


