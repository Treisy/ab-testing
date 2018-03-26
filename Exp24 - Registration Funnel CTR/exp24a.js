var showSticky = 3000;
var hideSticky = 13200;

function changeText() {
    $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
}

function removeIcons() {
    $('.sticky-share-tools._show').find('.sticky-share figure ul').remove('li');
}

function addOptions() {
    var optionsArray = [];

    var btnSubscribeTemplate = '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

    var iconShare = '<li><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a></li>';

    optionsArray.push(iconShare);
    optionsArray.push(btnSubscribeTemplate);

    $('.sticky-share-tools._show').find('.sticky-share figure ul').html(optionsArray.join(''));
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

    var stickyCTA = '<a href="javascript:void(0);" class="cta" name="cta">No, thank you</a>';


    $('.article-body-wrapper').append(stickyTemplate);
    $('.sticky-banner-wrapper').append(stickyTitle);
    $('.sticky-banner-wrapper').append(btnSubscribe);
    $('.sticky-banner-wrapper').append(stickyCTA);

    $(document).on('click', '.sticky-banner-wrapper a.cta', function(e){
        e.preventDefault();
        e.stopPropagation();
        hideStickyBanner();
        $('.sticky-banner-container').css('display', 'none');
        return false;
    });
}

function hideStickyBanner() {
    $('.sticky-banner').removeClass('show');
}

$(document).ready(function() {
    stickyBannerTemplate();
    
    $(window).scroll(function() {
        if ($('.sticky-share-tools').hasClass('_show')) {
            changeText();
            removeIcons();
            addOptions();
        }

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