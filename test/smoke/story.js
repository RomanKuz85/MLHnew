const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');

describe('Try again button', function () {

    it('A-110-1 Try again button is always active', function () {
        browser.url('');
        inputValues4AndClick(data.name, data.gender.she, data.age, data.storyType);
        const click = $(sel.tryAgainClicable).isClickable();
        expect(click).toEqual(true);

    });

});

