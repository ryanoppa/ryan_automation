const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all methods to perform testcases for TS_AP_001 */
module.exports = {

    verifyNewInitiativeButton: function(client){
        client.element('xpath', initiativePage.newInitiativeButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.newInitiativeButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "NEW INITIATIVE");
                })
                client.click(initiativePage.newInitiativeButton)
            }else{
                console.log("New Initiative button does not exist!");
            }
        } )
    },

    verifyInitiativeNameField: function(client){
        client.element('xpath', initiativePage.initiativeName, function(result){
            if(result.status != -1){
                client.setValue(initiativePage.initiativeName, "make office crews happy")
                client.pause(300)
            }else{
                console.log("Initiative name field (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeDescriptionField: function(client){
        client.element('xpath', initiativePage.initiativeDescription, function(result){
            if(result.status != -1){
                client.setValue(initiativePage.initiativeDescription, "office crews are not happy anymore")
                client.pause(300)
            }else{
                console.log("Initiative description field (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeSourceDropdown: function(client){
        client.element('xpath', initiativePage.initiativeSource, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeSource)
                client.pause(300)
            }else{
                console.log("Initiative source dropdown (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeSourceSelection, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeSourceSelection)
                client.pause(300)
            }else{
                console.log("Initiative source dropdown selection (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeQuestionDropdown: function(client){
        client.element('xpath', initiativePage.initiativeQuestion, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeQuestion)
                client.pause(500)
            }else{
                console.log("Initiative question dropdown (initiative creation modal) does not exist!");
            }
        } )

        //client.waitForElementVisible(initiativePage.initiativeQuestionSelection, 2000)
        client.element('xpath', initiativePage.initiativeQuestionSelection, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeQuestionSelection)
                client.pause(500)
            }else{
                console.log("Initiative question dropdown selection (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeNextButtonPageOne: function(client){
        client.element('xpath', initiativePage.initiativeNextButtonPageOne, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeNextButtonPageOne, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "NEXT");
                })
                client.click(initiativePage.initiativeNextButtonPageOne)
                client.pause(300)
            }else{
                console.log("Initiative Next button at page 1 (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeAddAction: function(client){
        client.element('xpath', initiativePage.initiativeAddActionTextBox, function(result){
            if(result.status != -1){
                client.setValue(initiativePage.initiativeAddActionTextBox, "Buy more diet coke")
                client.pause(300)
            }else{
                console.log("Initiative text box at 'ADD ACTIONS' page (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeAddActionAddButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeAddActionAddButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "ADD");
                })
                client.click(initiativePage.initiativeAddActionAddButton)
                client.pause(300)
            }else{
                console.log("Initiative add action button (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeNextButtonPageTwo: function(client){
        client.element('xpath', initiativePage.initiativeNextButtonPageTwo, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeNextButtonPageTwo, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "NEXT");
                })
                client.click(initiativePage.initiativeNextButtonPageTwo)
                client.pause(300)
            }else{
                console.log("Initiative Next button at page 2 (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeStatisticDropdown: function(client){
        client.element('xpath', initiativePage.initiativeStatistic, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeStatistic)
                client.pause(300)
            }else{
                console.log("Initiative statistic field (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeStatisticSegment, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeStatisticSegment)
                client.pause(300)
            }else{
                console.log("Initiative statistic - segment% (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeStatisticSegmentGeneric, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeStatisticSegmentGeneric)
                client.pause(300)
            }else{
                console.log("Initiative statistic - segment% - generic (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeStatisticSaveButton, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeStatisticSaveButton)
                client.pause(300)
            }else{
                console.log("Initiative save statistic button (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeIntervalDropdown: function(client){
        client.element('xpath', initiativePage.initiativeInterval, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeInterval)
                client.pause(300)
            }else{
                console.log("Initiative interval dropdown (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeIntervalSixMonths, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeIntervalSixMonths)
                client.pause(300)
            }else{
                console.log("Initiative interval dropdown selection (initiative creation modal) does not exist!");
            }
        } ) 
    },

    verifyInitiativeRuleDropdown: function(client){
        client.element('xpath', initiativePage.initiativeRule, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeRule)
                client.pause(300)
            }else{
                console.log("Initiative rule dropdown (initiative creation modal) does not exist!");
            }
        } )

        client.element('xpath', initiativePage.initiativeRuleLessThan, function(result){
            if(result.status != -1){
                client.click(initiativePage.initiativeRuleLessThan)
                client.pause(300)
            }else{
                console.log("Initiative rule dropdown selection (initiative creation modal) does not exist!");
            }
        } ) 
    },

    verifyInitiativeGoalField: function(client){
        client.element('xpath', initiativePage.initiativeGoal, function(result){
            if(result.status != -1){
                client.setValue(initiativePage.initiativeGoal, "7")
                client.pause(300)
            }else{
                console.log("Initiative goal field (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeThresholdField: function(client){
        client.element('xpath', initiativePage.initiativeThreshold, function(result){
            if(result.status != -1){
                client.setValue(initiativePage.initiativeThreshold, "5")
                client.pause(300)
            }else{
                console.log("Initiative threshold field (initiative creation modal) does not exist!");
            }
        } )
    },

    verifyInitiativeSaveButton: function(client){
        client.element('xpath', initiativePage.initiativeSaveButton, function(result){
            if(result.status != -1){
                client.getText(initiativePage.initiativeSaveButton, function(result){
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "SAVE");
                })
                client.click(initiativePage.initiativeSaveButton)
                client.pause(300)
            }else{
                console.log("Initiative save button at page 3 (initiative creation modal) does not exist!");
            }
        } )
    }

};