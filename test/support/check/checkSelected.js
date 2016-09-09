module.exports = (element, falseCase, done) => {
    const isSelected = browser.isSelected(element);

    if (falseCase) {
        isSelected.should.not
            .equal(true, `"${element}" should not be selected`);
    } else {
        isSelected.should.equal(true, `"${element}" should be selected`);
    }

    done();
};
