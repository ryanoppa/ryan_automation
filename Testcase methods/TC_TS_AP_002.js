const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_002 */
module.exports = {

    verifyInitiativeKabob: function(client){
        client.click(initiativePage.initiativeKabob)
    },

    verifyInitiativeKabobDuplicate: function(client){
        client.click(initiativePage.initiativeKabobDuplicate)
    },

    verifyInitiativeDuplicationConfirmationCancelButton: function(client){
        client.click(initiativePage.initiativeDuplicationCOnfirmationCancelButton)
        client.pause(1000) //wait while modal closes
    },

    verifyInitiativeDuplicationWithPlaceholderName: function(client){
        client.waitForElementVisible(initiativePage.initiativeDuplicationConfirmationNameField, 8000)
        client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
    },

    verifyInitiativeDuplicationWithDefinedName: function(client){
        client.waitForElementVisible(initiativePage.initiativeDuplicationConfirmationNameField, 8000)
        client.clearValue(initiativePage.initiativeDuplicationConfirmationNameField)
        client.setValue(initiativePage.initiativeDuplicationConfirmationNameField, "make office crews happier")
        client.pause(500)
        client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
    }

    

};