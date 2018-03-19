var btnSuscribeTemplate = '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';
var iconsContainer = document.querySelector('.sticky-share figure ul');

function changeText() {
    var stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
}

function removeIcons() {
    var iconLinkedIn = document.querySelector('.sticky-share figure ul li a.mck-linkedin-icon');
    var iconTwitter = document.querySelector('.sticky-share figure ul li a.mck-twitter-icon');
    var iconFacebook = document.querySelector('.sticky-share figure ul li a.mck-facebook-icon');
    
    iconLinkedIn.parentNode.removeChild(iconLinkedIn);
    iconTwitter.parentNode.removeChild(iconTwitter);
    iconFacebook.parentNode.removeChild(iconFacebook);
}

function addIcon(){
    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="interactive-link show-popup mck-share-icon download-this-article" aria-labelledby="share-interactive" role="button" target="_blank"></a></li>';
    
    var iconsArray = [];

    var download = document.querySelector('.sticky-share figure ul li .mck-download-icon').parentElement;

    var print = document.querySelector('.sticky-share figure ul li .mck-print-icon').parentElement;

    var iconPrint = '<li>' + print.innerHTML + '</li>';
    var iconDownload = '<li>' + download.innerHTML + '</li>';

    iconsArray.push(btnSuscribeTemplate);
    iconsArray.push(iconDownload);
    iconsArray.push(iconPrint);
    iconsArray.push(iconShare);

    
    $('.sticky-share figure ul').html(iconsArray.join(''));
}

$(document).ready(function(){
    changeText();
    removeIcons();
    addIcon();
});