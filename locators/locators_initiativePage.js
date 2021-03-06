let initiativePage = {

    /* Elements found on initiative dashboard */
    totalInitiatives: '//*[@id="root"]/section/article[1]/div/div/div[1]/p[1]',
    activeInitiatives: '//*[@id="root"]/section/article[1]/div/div/div[2]/p[1]',
    closedInitiatives: '//*[@id="root"]/section/article[1]/div/div/div[3]/p[1]',
    InitiativesListHeader: '//*[@id="root"]/section/article[2]/div[1]/header/h3/div[1]',
    newInitiativeButton: '//*[@id="root"]/section/article[2]/div[1]/header/h3/div[2]/div/button/span',
    /* End */

    /* Elements found on initiative creation modal */
    //Page1: CREATE INITIATIVE
    initiativeName: '//*[@id="initiative-name"]',
    initiativeDescription: '//*[@id="initiative-description"]',
    initiativeSource: '/html/body/div[17]/div/div/div/div/div[2]/div/div[3]/div/div[1]/div[1]',
    initiativeSourceSelection: '/html/body/div[17]/div/div/div/div/div[2]/div/div[3]/div/div[4]/div/div/div/ul/li/div/div', //survey: Confirmit Vancouver - customer satisfaction
    initiativeQuestion: '/html/body/div[17]/div/div/div/div/div[2]/div/div[4]/div[1]/div[1]',
    initiativeQuestionSelection:'/html/body/div[23]/div/div/ul/li[2]/div/div/div/div/div[1]/div[2]', //Question: "Last device used"
    initiativeNextButtonPageOne: '/html/body/div[17]/div/div/div/footer/button[3]/span', 
    
    //Page2: ADD ACTIONS
    initiativeAddActionTextBox:'/html/body/div[17]/div/div/div/div/div[2]/div/div[1]/div[1]/textarea',
    initiativeAddActionAddButton:'/html/body/div[17]/div/div/div/div/div[2]/div/div[1]/div[2]/button',
    initiativeNextButtonPageTwo: '/html/body/div[17]/div/div/div/footer/button[3]/span',

    //Page3: SET ATTRIBUTES
    initiativeStatistic:'/html/body/div[17]/div/div/div/div/div[2]/div/div[1]/div/div/div[1]/div[1]',
    initiativeStatisticSegment:'/html/body/div[23]/div/div[2]/div/div/div[1]/div/label',
    initiativeStatisticSegmentGeneric:'/html/body/div[23]/div/div[2]/div[2]/div[2]/div[3]/div[1]/div/label',
    initiativeStatisticSaveButton:'/html/body/div[23]/div/div[3]/button[2]',
    initiativeInterval:'/html/body/div[17]/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]',
    initiativeIntervalSixMonths:'/html/body/div[17]/div/div/div/div/div[2]/div/div[2]/div/div/div[4]/div/div/div/ul/li[3]/div/div',
    initiativeRule:'/html/body/div[17]/div/div/div/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div[1]',
    initiativeRuleLessThan:'/html/body/div[17]/div/div/div/div/div[2]/div/div[3]/div/div[1]/div/div[4]/div/div/div/ul/li[2]',
    initiativeGoal:'//*[@id="timeline-goal"]',
    initiativeThreshold:'//*[@id="threshold-input"]',
    initiativeSaveButton:'/html/body/div[17]/div/div/div/footer/button[2]',
    /* End */


    /* Elements found on initiative creation confirmation modal */
    initiativeCreationConfirmationTitle:'/html/body/div[21]/div/div/div/div/header/div/h4',
    initiativeCreationConfirmationBody:'/html/body/div[21]/div/div/div/div/div',
    initiativeCreationConfirmationViewInitiativeButton:'/html/body/div[21]/div/div/div/div/footer/button[2]',
    initiativeCreationConfirmationCloseButton: '',
    /* End */

    /* Elements found on initiative details expandable tab */
    initiativeDetailTab:'//*[@id="root"]/section/article[1]/div/div[2]/div[1]/p',
    initiativeDetailTitle:'//*[@id="root"]/section/article[1]/div/div[1]/div[1]/div/div/div/div/span',
    initiativeDetailDescription:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[1]/div[1]/div[2]',
    initiativeDetailSource:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[1]/div[3]/div[2]',
    initiativeDetailQuestion:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[1]/div[4]/div[2]',
    initiativeDetailStatistic:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[2]/div[1]/div[1]/div[2]',
    initiativeDetailInterval:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div[2]',
    initiativeDetailGoal:'//*[@id="root"]/section/article[1]/div/div[2]/div[2]/div/div[2]/div[1]/div[3]/div[2]',
    /* End */

    /* Elements found on initiative list board */
    initiativeKabob: '//*[@id="root"]/section/article[2]/div[2]/div/div/div/div/table/tbody/tr/td[2]/div/button', //first initiative
    initiativeKabobViewEdit: '',
    initiativeKabobDuplicate: '//*[@id="root"]/section/article[2]/div[2]/div/div/div/div/table/tbody/tr/td[2]/div/ul/li[2]/button',
    initiativeKabobDelete: '//*[@id="root"]/section/article[2]/div[2]/div/div/div/div/table/tbody/tr/td[2]/div/ul/li[3]/button/div',
    /* End */

    /* Elements found on initiative duplication confirmation modal */
    initiativeDuplicationConfirmationDuplicateButton:'/html/body/div[23]/div/div/div/div/footer/button[2]',
    initiativeDuplicationCOnfirmationCancelButton:'/html/body/div[23]/div/div/div/div/footer/button[1]',
    initiativeDuplicationConfirmationNameField:'//*[@id="initiative-name"]',
    /* End */

    /* Elements found on initiative deletion confirmation modal */
    initiativeDeletionConfirmationDeleteButton:'/html/body/div[23]/div/div/div/footer/button[2]'
    /* End */


    

};


module.exports = initiativePage;
