

var showSticky = 3000;
var hideSticky = 13200;

function changeText() {
    var stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
}


function removeIcons() {
    $('.sticky-share figure ul').remove('li');
}

function addOptions(){
    var btnSubscribeTemplate = '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

    var iconEmail = '<li><a data-capture-key="email" data-show-popup="login-overlay" class="mck-email-icon social-contact" aria-labelledby="email-interactive" target="_blank"></a></li>';

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank"></a></li>';

    var optionsArray = [];

    optionsArray.push(iconEmail);
    optionsArray.push(iconShare);
    optionsArray.push(btnSubscribeTemplate);
    
    $('.sticky-share figure ul').html(optionsArray.join(''));
}

function stickyBannerTemplate() {
    var stickyTemplate = '<div class="sticky-banner-container">' +
                            '<div class="sticky-banner">' +
                                ' <div class="sticky-banner-outer-wrapper">'+
                                    '<div class="sticky-banner-wrapper"></div>'+
                                    '</div>'+
                                '</div>'+
                        '</div>';

    var stickyTitle = '<span class="sticky-banner-title">Nunc ornare nisl ut risus gravida, eu rhoncus</span><a class="mck-arrow-left-icon social-contact" href="#"></a>';

    var btnSubscribe = '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a>';


    $('.article-body-wrapper').append(stickyTemplate);
    $('.sticky-banner-wrapper').append(stickyTitle);
    $('.sticky-banner-wrapper').append(btnSubscribe);

}

$(document).ready(function(){
    changeText();
    removeIcons();
    addOptions();
    stickyBannerTemplate();

    $(window).scroll(function() {
        if(window.scrollY >= showSticky) {
            $('.sticky-banner').addClass('show');
        }

        if(window.scrollY < showSticky) {
            hideStickyBanner();
        }

        if(window.scrollY >= hideSticky) {
            hideStickyBanner();
        }
    });
});
