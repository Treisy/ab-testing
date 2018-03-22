var btnSubscribeTemplate = '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

function changeText() {
    $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
}

function removeIcons() {
    $('.sticky-share figure ul').remove('li');
 }

function addOptions() {
    var optionsArray = [];

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a></li>';

    optionsArray.push(iconShare);
    optionsArray.push(btnSubscribeTemplate);

    $('.sticky-share figure ul').html(optionsArray.join(''));
}

$(document).ready(function() {
    changeText();
    removeIcons();
    addOptions();
});