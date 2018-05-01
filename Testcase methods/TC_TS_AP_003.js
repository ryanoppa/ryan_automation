const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_003 */
module.exports = {

    verifyInitiativeKabob: function(client){
        client.click(initiativePage.initiativeKabob) //initiative created in TS_AP_001
    },

    verifyInitiativeKabobDelete: function(client){
        client.click(initiativePage.initiativeKabobDelete)
    },

    verifyInitiativeDeletionConfirmationDeleteButton: function(client){
        client.click(initiativePage.initiativeDeletionConfirmationDeleteButton)
    }
    

};