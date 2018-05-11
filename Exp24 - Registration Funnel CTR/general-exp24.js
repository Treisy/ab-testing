window.authorsSpacing = function () {
    var aside = document.querySelector('aside.-signup-promo');
    var footer = document.querySelector('footer.about-authors');

    if ($(aside).css('display') == 'none') {
        footer.classList.remove('-signupAboveAboutAuthor');
    }
};

window.hideDisruptor = function () {
    var aside = document.querySelector('aside.disruptor.-left');

    if (aside) {
        $(aside).css('display', 'none');
    }

};