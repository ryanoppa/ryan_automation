const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_001 */
module.exports = {

    verifyNewInitiativeButton: function(client){
        client.waitForElementVisible(initiativePage.newInitiativeButton, 8000)
        client.click(initiativePage.newInitiativeButton)
    },

    verifyInitiativeNameField: function(client){
        client.waitForElementVisible(initiativePage.initiativeName, 8000)
        client.setValue(initiativePage.initiativeName, "make office crews happy")
        client.pause(300)
    },

    verifyInitiativeDescriptionField: function(client){
        client.setValue(initiativePage.initiativeDescription, "office crews are not happy anymore")
        client.pause(300)
    },

    verifyInitiativeSourceDropdown: function(client){
        client.click(initiativePage.initiativeSource)
        client.pause(300)
        client.click(initiativePage.initiativeSourceSelection)
        client.pause(300)
    },

    verifyInitiativeQuestionDropdown: function(client){
        client.click(initiativePage.initiativeQuestion)
        client.waitForElementVisible(initiativePage.initiativeQuestionSelection, 2000)
        client.click(initiativePage.initiativeQuestionSelection)
        client.pause(300)
    },

    verifyInitiativeNextButtonPageOne: function(client){
        client.waitForElementVisible(initiativePage.initiativeNextButtonPageOne, 2000)
        //client.pause(1000) //Need to pause. Collaborator modal closes slowly, causing selenium not being able to click Next button. 
        client.click(initiativePage.initiativeNextButtonPageOne)
        client.pause(300)
    },

    verifyInitiativeAddAction: function(client){
        client.setValue(initiativePage.initiativeAddActionTextBox, "Buy more diet coke")
        client.pause(300)
        client.click(initiativePage.initiativeAddActionAddButton)
        client.pause(300)
    },

    verifyInitiativeNextButtonPageTwo: function(client){
        client.click(initiativePage.initiativeNextButtonPageTwo)
    },

    verifyInitiativeStatisticDropdown: function(client){
        client.click(initiativePage.initiativeStatistic)
        client.pause(300)
        client.click(initiativePage.initiativeStatisticSegment)
        client.pause(300)
        client.click(initiativePage.initiativeStatisticSegmentGeneric)
        client.pause(300)
        client.click(initiativePage.initiativeStatisticSaveButton)
        client.pause(300)
    },

    verifyInitiativeIntervalDropdown: function(client){
        client.click(initiativePage.initiativeInterval)
        client.pause(300)
        client.click(initiativePage.initiativeIntervalSixMonths)
        client.pause(300)
    },

    verifyInitiativeRuleDropdown: function(client){
        client.click(initiativePage.initiativeRule)
        client.pause(300)
        client.click(initiativePage.initiativeRuleLessThan)
        client.pause(300)
    },

    verifyInitiativeGoalField: function(client){
        client.setValue(initiativePage.initiativeGoal, "7")
        client.pause(300)
    },

    verifyInitiativeThresholdField: function(client){
        client.setValue(initiativePage.initiativeThreshold, "5")
        client.pause(300)
    },

    verifyInitiativeSaveButton: function(client){
        client.click(initiativePage.initiativeSaveButton)
        client.pause(300)
    }

};