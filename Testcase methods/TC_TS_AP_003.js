const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_003 */
module.exports = {

    verifyInitiativeKabob: function(client){
        client.element('xpath', initiativePage.initiativeKabob, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabob) //initiative created in TS_AP_001
                client.pause(300)
            }else{
                console.log("Initiative kabob does not exist!");
            }
        } )
    },

    verifyInitiativeKabobDelete: function(client){
        client.element('xpath', initiativePage.initiativeKabobDelete, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeKabobDelete)
                client.pause(300)
            }else{
                console.log("Initiative kabob - delete option does not exist!");
            }
        } )
    },

    verifyInitiativeDeletionConfirmationDeleteButton: function(client){
        client.element('xpath', initiativePage.initiativeDeletionConfirmationDeleteButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeDeletionConfirmationDeleteButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "DELETE");
                })
                client.click(initiativePage.initiativeDeletionConfirmationDeleteButton)
                client.pause(300)
            }else{
                console.log("delete button (deletion confirmation modal) does not exist!");
            }
        } )
        
    }
    

};