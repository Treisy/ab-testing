function changeText() {
    $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
}

function removeIcons() {
    $('.sticky-share figure ul').remove('li');
 }

function addOptions() {
    var optionsArray = [];

    var btnSubscribeTemplate = '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a></li>';

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

    var stickyTitle = '<span class="sticky-banner-title">Stay current on your favorite topics</span>';

    var btnSubscribe = '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a>';

    var stickyCTA = '<a href="#" class="cta">No, thank you</a>';


    $('.article-body-wrapper').append(stickyTemplate);
    $('.sticky-banner-wrapper').append(stickyTitle);
    $('.sticky-banner-wrapper').append(btnSubscribe);
    $('.sticky-banner-wrapper').append(stickyCTA);
}

function hideStickyBanner() {
    $('.sticky-banner').removeClass('show');
}

$('.sticky-banner-wrapper .cta').click(function(event){
    event.preventDefault();
    hideStickyBanner();
});

$(document).ready(function() {
    changeText();
    removeIcons();
    addOptions();
    stickyBannerTemplate();
    
    $(window).scroll(function() {
        var showSticky = 3000;
        var hideSticky = 13200;

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