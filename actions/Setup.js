const loginPage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_loginPage.js');
const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all actions that need to be performed before any test case begins */
module.exports = {

    setup: function(client){

        //go to Horizon home page
        client.url('https://mob.testlab.firmglobal.net/home/');
        client.maximizeWindow();
        client.waitForElementVisible(loginPage.account,5000);
        client.setValue(loginPage.account, 'RyanK_Pros');
        client.setValue(loginPage.password, 'Goomin88');
        client.click(loginPage.submitButton);

        //go into studio
        client.useXpath();
        client.waitForElementVisible('//*[@id="root"]/div/main/section/div[2]/div[1]/section/div/ol/li[12]/div/a/div[1]/div/div',8000);
        client.click('//*[@id="root"]/div/main/section/div[2]/div[1]/section/div/ol/li[12]/div/a/div[1]/div/div');

        //go into Ryan Action Planner App
        client.waitForElementVisible('//*[@id="root"]/div/div/div/div/main/table/tbody/tr[11]/td[1]/span/a',8000);
        client.click('//*[@id="root"]/div/div/div/div/main/table/tbody/tr[11]/td[1]/span/a');

        //minimize editor
        client.pause(4000); //Widget does not load when editor is minimized before page loads. Give explicit pause. WaitForElementVisible() will not work.
        client.click('//*[@id="root"]/div/div/div/div/section/div/div[1]/div/div[1]/div[1]/span[2]/span[2]');
        client.pause(1500); //Give extra one second while editor shrinks
    }
    
};