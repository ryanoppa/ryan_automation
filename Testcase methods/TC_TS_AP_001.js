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
    },

    verifyInitiativeDescriptionField: function(client){
        client.setValue(initiativePage.initiativeDescription, "office crews are not happy anymore")
    },

    verifyInitiativeSourceDropdown: function(client){
        client.click(initiativePage.initiativeSource)
        client.click(initiativePage.initiativeSourceSelection)
    },

    verifyInitiativeQuestionDropdown: function(client){
        client.click(initiativePage.initiativeQuestion)
        client.waitForElementVisible(initiativePage.initiativeQuestionSelection, 2000)
        client.click(initiativePage.initiativeQuestionSelection)
    },

    verifyInitiativeNextButtonPageOne: function(client){
        client.waitForElementVisible(initiativePage.initiativeNextButtonPageOne, 2000)
        client.pause(1000) //Need to pause. Collaborator modal closes slowly, causing selenium not being able to click Next button. 
        client.click(initiativePage.initiativeNextButtonPageOne)
    },

    verifyInitiativeAddAction: function(client){
        client.setValue(initiativePage.initiativeAddActionTextBox, "Buy more diet coke")
        client.click(initiativePage.initiativeAddActionAddButton)
    },

    verifyInitiativeNextButtonPageTwo: function(client){
        client.click(initiativePage.initiativeNextButtonPageTwo)
    },

    verifyInitiativeStatisticDropdown: function(client){
        client.click(initiativePage.initiativeStatistic)
        client.click(initiativePage.initiativeStatisticSegment)
        client.click(initiativePage.initiativeStatisticSegmentGeneric)
        client.click(initiativePage.initiativeStatisticApplyButton)
    },

    verifyInitiativeIntervalDropdown: function(client){
        client.click(initiativePage.initiativeInterval)
        client.click(initiativePage.initiativeIntervalSixMonths)
    },

    verifyInitiativeRuleDropdown: function(client){
        client.click(initiativePage.initiativeRule)
        client.click(initiativePage.initiativeRuleLessThan)
    },

    verifyInitiativeGoalField: function(client){
        client.setValue(initiativePage.initiativeGoal, "7")
    },

    verifyInitiativeThresholdField: function(client){
        client.setValue(initiativePage.initiativeThreshold, "5")
    },

    verifyInitiativeSaveButton: function(client){
        client.click(initiativePage.initiativeSaveButton)
    }

};