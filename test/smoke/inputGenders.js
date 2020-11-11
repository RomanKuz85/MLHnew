/*
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');

describe('Gender choice is correct', function () {

    it('User can select \'he\'', function () {
        browser.url('');
        const input = $$(sel.selectGender)[0].click();
        browser.pause(2000);
        const text = $$(sel.selectGender)[0].getAttribute('value');
        expect(text).toEqual(exp.radioButton1);
    });

    it('User can select \'she\'', function () {
        const input = $$(sel.selectGender)[1].click();
        const text = $$(sel.selectGender)[1].getAttribute('value');
        expect(text).toEqual(exp.radioButton2);
    })

    it('User can select \'it\'', function () {
        const input = $$(sel.selectGender)[2].click();
        const text = $$(sel.selectGender)[2].getAttribute('value');
        expect(text).toEqual(exp.radioButton3);
    });

    it('Gender cannot choice \'he\' and \'she\' at the same time', function () {
        $$(sel.selectGender)[0].click();
        $$(sel.selectGender)[1].click();
        const textHe = $$(sel.genderChoiceSel)[0].getAttribute('class');
        expect(textHe).toEqual(exp.genderNotChoice);
        const textShe = $$(sel.genderChoiceSel)[1].getAttribute('class');
        expect(textShe).toEqual(exp.genderChoice);
    });

    it('Gender cannot choise \'she\' and \'it\' at the same time', function () {
       $$(sel.selectGender)[1].click();
       $$(sel.selectGender)[2].click();
       const textShe = $$(sel.genderChoiceSel)[1].getAttribute('class');
       expect(textShe).toEqual(exp.genderNotChoice);
       const textIt = $$(sel.genderChoiceSel)[2].getAttribute('class');
       expect(textIt).toEqual(exp.genderChoice);
    });

    it('Gender cannot coise \'he\' and \'it\' at the same time', function () {
        $$(sel.selectGender)[0].click();
        $$(sel.selectGender)[2].click();
        const textHe = $$(sel.genderChoiceSel)[0].getAttribute('class');
        expect(textHe).toEqual(exp.genderNotChoice);
        const textIt = $$(sel.genderChoiceSel)[2].getAttribute('class');
        expect(textIt).toEqual(exp.genderChoice);
    });

    it('Gender cannot choise \'he\', \'she\', \'it\' at the same time', function () {
        $$(sel.selectGender)[0].click();
        $$(sel.selectGender)[1].click();
        $$(sel.selectGender)[2].click();
        const textHe = $$(sel.genderChoiceSel)[0].getAttribute('class');
        expect(textHe).toEqual(exp.genderNotChoice);
        const textShe = $$(sel.genderChoiceSel)[1].getAttribute('class');
        expect(textShe).toEqual(exp.genderNotChoice);
        const textIt = $$(sel.genderChoiceSel)[2].getAttribute('class');
        expect(textIt).toEqual(exp.genderChoice);
    });

});
*/
