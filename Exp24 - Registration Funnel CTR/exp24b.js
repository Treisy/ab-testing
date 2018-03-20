var btnSuscribeTemplate = '<li><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';


function changeText() {
    var stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
}


function removeIcons() {
    $('.sticky-share figure ul').remove('li');
}

function addOptions(){
    var iconEmail = '<li><a data-capture-key="email" data-show-popup="login-overlay" class="mck-email-icon social-contact" aria-labelledby="email-interactive" target="_blank"></a></li>';

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank"></a></li>';

    var optionsArray = [];

    optionsArray.push(iconEmail);
    optionsArray.push(iconShare);
    optionsArray.push(btnSuscribeTemplate);
    
    $('.sticky-share figure ul').html(optionsArray.join(''));
}

$(document).ready(function(){
    changeText();
    removeIcons();
    addOptions();
});
