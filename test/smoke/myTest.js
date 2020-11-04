/*
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('MLH trial');
        });

    });

    describe('Elements exist', function () {

        it('TC-002 Label for header exist', function () {
            const header = $(sel.headerR).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Label for description exist', function () {
            const description = $(sel.descriptionR).isDisplayed();
            expect(description).toEqual(true);
        });

        it('TC-0024 Label for name', function () {
            const label = $$(sel.labelR)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for gender', function () {
            const label = $$(sel.labelR)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for age', function () {
            const label = $$(sel.labelR)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for story', function () {
            const label = $$(sel.labelR)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008 Label for image upload exist', function () {
            const label = $(sel.imageR).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Label for submit button exist', function () {
            const label = $(sel.submitButtonR).isDisplayed();
            expect(label).toEqual(true);
        });


    });

    describe('Elements are correct', function () {

        it('TC-010 Label for header = My Little Hero', function () {
            const header = $(sel.headerR).getText();
            expect(header).toEqual(exp.labelHeader);
        });

        it('TC-011 Label for description = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const description = $(sel.descriptionR).getText();
            expect(description).toEqual(exp.labelDescription);
        });

        it('TC-012 Label for name = 1. What is your HERO\'s name?', function () {
            const text = $$(sel.labelR)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-013 Name input field = Hero\'s name', function () {
            const text = $(sel.nameR).getAttribute('placeholder');
            expect(text).toEqual(exp.NameInputField);
        });

        it('TC-022 Label for gender = 2. Please choose a gender.', function () {
            const text = $$(sel.labelR)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-023.1 1-st radio button = he', function () {
            const text = $(sel.radioButton1R).getText();
            expect(text).toEqual(exp.radioButton1);
        });

        it('TC-023.2 1-st radio button = she', function () {
            const text = $(sel.radioButton2R).getText();
            expect(text).toEqual(exp.radioButton2);
        });

        it('TC-023.3 1-st radio button = it', function () {
            const text = $(sel.radioButton3R).getText();
            expect(text).toEqual(exp.radioButton3);
        });

        it('TC-031 Label for age = 3. How old is your hero?', function () {
            const text = $$(sel.labelR)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-047 Label for story = 4. What type of story would you like to read?', function () {
            const text = $$(sel.labelR)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });

    });

});

*/