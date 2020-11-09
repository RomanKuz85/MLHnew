const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const exp = require ('../../data/expected.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const findTextAge = require('../../helpers/findTextAge');


describe('Checking the naditional functionality', function () {

    describe('Check age', function () {


        it('TC-000001 Check is correct for age in the texts', function () {
            browser.url('');
            for (let i = 0; i < data.checkAge.length; i++) {
                inputValues4AndClick(data.name, data.gender.she, data.checkAge[i], data.storyType);
                let textAge = findTextAge();
                console.log(textAge);
                expect(textAge).toEqual(exp.checkAge[i]);
                $(sel.tryAgainR).click();

            }

        });

    });

    });