const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_002 */
module.exports = {
    
    verifyInitiativeKabob: function(client){
        client.element('xpath', initiativePage.initiativeKabob, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabob)
                client.pause(500)
            }else{
                console.log("Initiative kabob does not exist!");
            }
        } )
    },

    verifyInitiativeKabobDuplicate: function(client){
        client.element('xpath', initiativePage.initiativeKabobDuplicate, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabobDuplicate)
                client.pause(500)
            }else{
                console.log("Initiative kabob - duplicate option does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationConfirmationCancelButton: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationCOnfirmationCancelButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeDuplicationCOnfirmationCancelButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "CANCEL");
                })
                client.click(initiativePage.initiativeDuplicationCOnfirmationCancelButton)
                client.pause(1000) //wait while modal closes
            }else{
                console.log("cancel button (duplication confirmation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationWithPlaceholderName: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationConfirmationDuplicateButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeDuplicationConfirmationDuplicateButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "DUPLICATE");
                })
                client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
                client.pause(500)
            }else{
                console.log("Duplicate button (duplication confirmation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeDuplicationWithDefinedName: function(client){
        client.element('xpath', initiativePage.initiativeDuplicationConfirmationNameField, function(result){
            if(result.status != -1){
                client.clearValue(initiativePage.initiativeDuplicationConfirmationNameField)
                client.setValue(initiativePage.initiativeDuplicationConfirmationNameField, "make office crews happy2")
                client.pause(500)
            }else{
                console.log("name field (duplication confirmation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeDuplicationConfirmationDuplicateButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeDuplicationConfirmationDuplicateButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "DUPLICATE");
                })
                client.click(initiativePage.initiativeDuplicationConfirmationDuplicateButton) //click DUPLICATE button
                client.pause(500)
            }else{
                console.log("Duplicate button (duplication confirmation modal) does not exist!");
            }
        } )
    }

    

};