var btnSuscribeTemplate = '<li><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

var iconsContainer = document.querySelector('.sticky-share figure ul');

function changeText() {
    var stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
}


function removeIcons() {
   $('.sticky-share figure ul').remove('li');
}

function addIconsWithText(){
    var iconDownload = '<li><a href="/~/media/McKinsey/Business Functions/Organization/Our Insights/The agenda of a talen first CEO/An-agenda-for-the-talent-first-CEO.ashx" data-capture-key="download-this-article" rel="nofollow" data-show-popup="login-overlay" class="mck-download-icon social-contact" aria-labelledby="open-interactive" target="_blank">Download<span class="visually-hidden">Download this article</span> </a></li>';

    var iconPrint = '<li class="print"><a data-capture-key="print-this-article" data-show-popup="login-overlay" class="mck-print-icon social-contact" aria-labelledby="open-interactive" target="_blank">Print</a></li>';

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a></li>';

    var iconsArray = [];

    iconsArray.push(iconDownload);
    iconsArray.push(iconPrint);
    iconsArray.push(iconShare);
    iconsArray.push(btnSuscribeTemplate);
    
    $('.sticky-share figure ul').html(iconsArray.join(''));
}

$(document).ready(function() {
    changeText();
    removeIcons();
    addIconsWithText();
});