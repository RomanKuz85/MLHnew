const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');

describe('Checking the name functionality', function () {

    describe('Happy path', function () {


        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.submitButtonR).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

    });

        describe('Other path', function () {


            it('TC-022 Gender he is working', function () {
                browser.url('');
                inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType);
                const but = $(sel.tryAgainR).isDisplayed();
                browser.pause(3000);
                expect(but).toEqual(true);
            });

            it('TC-023 Gender it is working', function () {
                browser.url('');
                inputValues4(data.name, data.gender.it, data.age, data.storyType);
                $(sel.submitButtonR).click();
                const but = $(sel.tryAgainR).isDisplayed();
                browser.pause(3000);
                expect(but).toEqual(true);
            });

        });
})