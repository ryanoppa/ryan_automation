module.exports = {
  tags: ['createInitiatives'],
  'Demo test testlab' : function (browser) {
       browser 

       //go to Horizon home page
       .url('https://mob.testlab.firmglobal.net/home/') 
       .maximizeWindow()
       .waitForElementVisible('input[class=username-input]',5000)
       .setValue('input[class=username-input]', 'RyanK_Pros')
       .setValue('input[class=password-input]', 'Goomin88')
       .click('input[id=btnlogin]')

       //expand top left icons
       .waitForElementVisible('nav[role=navigation]',5000)
       .click('nav[role=navigation]')

       //click Actions icon
       .useXpath()
       .click('/html/body/div[2]/div/ul/li[11]/div/div/a/div[1]/div')

       //click second survey(VanQA Hub for AM) Action Planner button
       .waitForElementVisible('//*[@id="root"]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[4]/div[2]/button',8000)
       .click('//*[@id="root"]/div/div[1]/div[2]/div/table/tbody/tr[2]/td[4]/div[2]/button')

       //click +New initiatives button
       .waitForElementVisible('//*[@id="root"]/div/div[1]/div[3]/div[1]/div/div',12000)
       .click('//*[@id="root"]/div/div[1]/div[3]/div[1]/div/div')

       //fill in initiative name
       .useCss()
       .waitForElementVisible('input[data-input-control=initiative-name]',8000)
       .setValue('input[data-input-control=initiative-name]', 'Make office crews happy')
       
       //fill in description
       .setValue('textarea[data-textarea-control]','office happiness')

       //select Source
       .useXpath()
       .click('//*[@id="add-initiatives-wizard-create-initiative"]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div[1]/div')
       .click('//*[@id="add-initiatives-wizard-create-initiative"]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div[3]/div/ul/li[3]/div/div')

       //select Question
       .click('//*[@id="add-initiatives-wizard-create-initiative"]/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div')
       .useCss()
       .waitForElementVisible('li[data-list-id="OSAT"]',8000)
       .click('li[data-list-id="OSAT"]')
       
       //add collaborators
       .click('div[class=co-strategyplanning-link]')

       //verify title, searchbox, add button, cancel button display
       //title
       .useXpath()
       .assert.elementPresent('//*[@id="root"]/div/div[3]/div/div/div/div[1]/div[1]')
       .assert.containsText('//*[@id="root"]/div/div[3]/div/div/div/div[1]/div[1]', 'Select Collaborators')

       //searchbox
       .assert.elementPresent('//*[@id="root"]/div/div[3]/div/div/div/div[2]/div/div[1]/div/div[1]/input')

       //add button
       .assert.elementPresent('//*[@id="root"]/div/div[3]/div/div/div/div[3]/div/a[1]')

       //cancel button
       .assert.elementPresent('//*[@id="root"]/div/div[3]/div/div/div/div[3]/div/a[2]')

       //click add button
       .click('//*[@id="root"]/div/div[3]/div/div/div/div[3]/div/a[1]')

       //click next button
       .click('//*[@id="add-initiatives-wizard"]/div[3]/div/a[1]')

       //create an action
       .setValue('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div[2]/div[1]/div/div/input', 'buy more diet coke')
       .pause(500) //something is glitching the text box. Give 0.5 second pause
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div[2]/div[2]/div')

       //verify action got created
       .assert.elementPresent('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[3]/div[2]/div/div/div[1]')

       //click next button
       .click('//*[@id="add-initiatives-wizard"]/div[3]/div/a[2]')

       //set Attributes
       //set statistic from Mean to Segment % then select 'Good' option
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div[2]/div/div/div')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div[2]/div/div/div/div[3]/div/div/div[2]')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div[2]/div/div/div/div[3]/div/div[2]/div[1]/div[2]/div[4]/div/label[1]')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[1]/div[2]/div/div/div/div[3]/div/div[2]/div[2]/div[1]')

       //set interval from 'Last 12 months rolling' to 'Last 3 months rolling'
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[2]/div/div[2]/div/div/span')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div')
       
       //set goal from > to < and put value 5
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/span')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[2]/div[1]/div[2]/div/div[1]/div/div/div[2]/div')
       .setValue('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[2]/div[1]/div[2]/div/div[2]/div/input', '5')

       //set Threshold to 2
       .setValue('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div/div/input', '2')

       //select list: J List 1
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[2]/div/div/div[2]/div/div/div/div[1]')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[1]/div[2]/div[1]/div/label[1]')
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[2]/div/div/div[2]/div/div/div/div[3]/div/div[2]/div[1]')

       //select deadline date: May 23 2018
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[3]/div/div[1]/div[2]/div/input')
       .click('/html/body/div[5]/div/div/div/div/div[1]/div/button[2]')
       .click('/html/body/div[5]/div/div/div/div/div[2]/div/div[2]/div[4]/div[4]/div/span')

       //select start date: April 18 2018
       .click('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[3]/div/div[2]/div[2]/div/input')
       .click('/html/body/div[6]/div/div/div/div/div[2]/div/div[2]/div[3]/div[4]/div/span')

       //set cost: $100
       .setValue('//*[@id="add-initiatives-wizard"]/div[2]/div/div[2]/div/div/div[3]/div/div[3]/div[2]/div/input', 100)

       //click next
       .click('//*[@id="add-initiatives-wizard"]/div[3]/div/a[2]')

       //verify confirmation modal is present:
       //verify "Initiative Saved" message is present
       .waitForElementVisible('//*[@id="root"]/div/div[1]/div[3]/div[3]/div[2]/div/div[1]/div[1]', 8000)
       .assert.elementPresent('//*[@id="root"]/div/div[1]/div[3]/div[3]/div[2]/div/div[1]/div[1]')

       //verify View initiative button is present
       .assert.elementPresent('//*[@id="root"]/div/div[1]/div[3]/div[3]/div[2]/div/div[3]/div/a[1]')

       //click View initiative button
       .click('//*[@id="root"]/div/div[1]/div[3]/div[3]/div[2]/div/div[3]/div/a[1]')

       //verify correct initiative is created by checking title inside the initiative
       .assert.elementPresent('//*[@id="root"]/div/div[1]/div[3]/div[2]/div[1]/div[1]/h1/span/span/span/span')

       //go back to initiative home page to check the initiative is present in the list
       .click('//*[@id="root"]/div/div[1]/div[1]/div/div/div/ul/li[3]/div[1]')
       .waitForElementVisible('//*[@id="root"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[2]/table/tbody/tr[1]/td[1]/div/div[2]/div[1]/a/span', 8000)
       .assert.elementPresent('//*[@id="root"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[2]/table/tbody/tr[1]/td[1]/div/div[2]/div[1]/a/span')
       .getText('//*[@id="root"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[2]/table/tbody/tr[1]/td[1]/div/div[2]/div[1]/a/span', function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "Make office crews happy")
       })

       //delete the initiative
       //click 'X' icon
       .useCss()
       .waitForElementVisible('svg[class="co-strategyplanning-icon icon-circle-x "]', 8000)
       .click('svg[class="co-strategyplanning-icon icon-circle-x "]')


       //verify confirmation modal pops up
       //verify modal title then click 'Delete'
       .useXpath()
       .waitForElementVisible('//*[@id="root"]/div/div[3]/div/div/div[1]/div[1]', 8000)
       .assert.elementPresent('//*[@id="root"]/div/div[3]/div/div/div[1]/div[1]')
       .click('//*[@id="root"]/div/div[3]/div/div/div[3]/div/a[1]')

       //verify the initiative is deleted by checking confirmation message
       .pause(1000)
       .waitForElementVisible('//*[@id="root"]/div/div[1]/div[2]', 8000)
       .assert.elementPresent('//*[@id="root"]/div/div[1]/div[2]')
       .getText('//*[@id="root"]/div/div[1]/div[2]', function(result){
         this.assert.equal(typeof result, "object");
         this.assert.equal(result.status, 0);
         this.assert.equal(result.value, "'Make office crews happy' has been deleted.");

       })

       //close window
       .closeWindow()
       


       ;
     }
};


