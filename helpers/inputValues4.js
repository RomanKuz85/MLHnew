const sel = require ('../data/selectors.json')

function inputValues4 (name, gender, age, storyType){
    $(sel.nameR).setValue(name);
    $$(sel.genderR)[gender].click();
    $(sel.ageR).setValue(age);
    $(sel.storyClickR).click();
    $$(sel.storyTypeR)[storyType].click();
}

module.exports = inputValues4;