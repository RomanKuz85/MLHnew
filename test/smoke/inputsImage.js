const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Image input field negative tests', function () {

    it('A-060-2 Can not upload pdf. file', function () {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        uploadImageBrowser(data.imageChoice.testPDF);
        browser.pause(3000);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-060-2 Can not upload xlsx. file', function () {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        uploadImageBrowser(data.imageChoice.testXLSX);
        browser.pause(3000);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

});

