const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_002 */
module.exports = {
    
    verifyInitiativeKabob: function(client){
        client.element('xpath', initiativePage.initiativeKabob, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabob)
            }else{
                console.log("Initiative kabob does not exist!");
            }
        } )
    },

    verifyInitiativeKabobDuplicate: function(client){
        client.element('xpath', initiativePage.initiativeKabobDuplicate, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabobDuplicate)
            }else{
                console.log("Initiative kabob - duplicate option does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationConfirmationCancelButton: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationCOnfirmationCancelButton, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeDuplicationCOnfirmationCancelButton)
                client.pause(1000) //wait while modal closes
            }else{
                console.log("cancel button (duplication confirmation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationWithPlaceholderName: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationConfirmationNameField, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
            }else{
                console.log("name field (duplication confirmation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationWithDefinedName: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationConfirmationNameField, function(result){
            if(result.status != -1){
                client.clearValue(initiativePage.initiativeDuplicationConfirmationNameField)
                client.setValue(initiativePage.initiativeDuplicationConfirmationNameField, "make office crews happy2")
                client.pause(300)
                client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
            }else{
                console.log("name field (duplication confirmation modal) does not exist!");
            }
        } )
    }

    

};