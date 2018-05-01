const initiativePage = require('C:/Users/RyanK/Documents/ryanautomation/locators/locators_initiativePage.js');

/* This page contains all secondary actions that are not directly related to test cases */
module.exports = {

    //deletes duplicate created in previous test case for database cleanliness and consistency
    //mainly used in TS_AP_002
    deleteDuplicate: function(client){
        client.click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[2]/div/button'); //click kabob on duplicate
        client.click('//*[@id="root"]/section/article[2]/div[2]/div/div/table/tbody/tr[2]/td[2]/div/ul/li[3]/button/div') //click delete option
        client.pause(500) //Widget has a glitch if DELETE button is clicked too early (deletion works fine but initiative list does not update). Give 0.5 second pause
        client.click('/html/body/div[22]/div/div/div/footer/button[2]/span') //click DELETE button
        client.pause(500) //wait while modal closes
    }
};