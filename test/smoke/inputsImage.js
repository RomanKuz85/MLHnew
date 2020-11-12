const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Image input field negative tests', function () {

    it('A-060-2 Can not upload .pdf file', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.testPDF);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    })

    it('A-060-3 Can not upload .pdf file', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.testXLSX);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    })

})

