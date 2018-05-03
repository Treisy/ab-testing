var showSticky = 3000;
var currentScroll;
var scrollShare;
var downloadUrl;

var stickyShareContainer;

var isLoggedIn = (McKinsey.LoginStatus === "logged_in") ? true : false;

if (isLoggedIn) {
    btnSubscribeUrl = '/user-registration/manage-account/edit-subscriptions';
} else {
    btnSubscribeUrl = '/user-registration/register';
}

function changeText() {
    var title = $('header h1.headline').text();
    $('.sticky-share-title').text(title);
}

function stickyHeaderTemplate(downloadUrl) {
    var articleTitle = $('header h1.headline').text();
    var subject = 'From mckinsey.com: ' + articleTitle;
    var urlArticle = window.location.protocol + window.location.hostname + window.location.pathname;
    var body = 'I recommend you visit mckinsey.com to read:' + '\n\n' + articleTitle + '\n' + urlArticle;

    var templateHeader = '<ul class="new-icons hidden">' +
        '<li><a href="' + downloadUrl + '" data-capture-key="download-this-article" rel="nofollow" data-show-popup="login-overlay" class="interactive-link show-popup mck-download-icon social-contact download-this-article" aria-labelledby="open-interactive" target="_blank">Download<span class="visually-hidden">Download this article</span></a></li>' +
        '<li class="print"><a data-capture-key="print-this-article" data-show-popup="login-overlay" class="interactive-link show-popup mck-print-icon social-contact print-this-article" aria-labelledby="open-interactive" target="_blank">Print</a></li>' +
        '<li>' +
        '<a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive">Share</a>' +
        '<div class="share-container hidden">' +
        '<ul>' +
        '<li><a href="#0" class="mck-linkedin-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on LinkedIn</span></a></li>' +
        '<li><a href="#0" class="mck-twitter-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Twitter</span></a></li>' +
        '<li><a href="#0" class="mck-facebook-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Facebook</span></a></li>' +
        '<li><a href="mailto:?subject=' + subject + '&amp;body=' + encodeURIComponent(body) + '" class="mck-email-icon" role="button"><span class="visually-hidden">Email this article</span></a></li>' +
        '</ul>' +
        '</div>' +
        '</li>' +
        '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe"href="' + btnSubscribeUrl + '">Subscribe</a></li>' +
        '</ul>';

    $('.sticky-share-wrapper .sticky-share ul').after(templateHeader);
}

function stickyBannerTemplate() {
    var stickyBannerTitle = 'Stay current on your favorite topics';
    var stickyBannerSubscribe = '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="' + btnSubscribeUrl + '">Subscribe</a>';

    var stickyBannerFixedTemplate = '<div class="sticky-banner-container-fixed hidden">' +
        '<div class="sticky-banner-outer-wrapper">' +
        '<div class="sticky-banner-wrapper">' +
        '<span class="sticky-banner-title">' + stickyBannerTitle + '</span>' +
        '<a class="mck-arrow-left-icon hidden" href="#" name="collapse"></a>' +
        stickyBannerSubscribe +
        '</div>' +
        '</div>' +
        '</div>';

    var stickyBannerStaticTemplate = '<div class="sticky-banner-container-static">' +
        '<div class="sticky-banner-outer-wrapper">' +
        '<div class="sticky-banner-wrapper">' +
        '<span class="sticky-banner-title">' + stickyBannerTitle + '</span>' +
        stickyBannerSubscribe +
        '</div>' +
        '</div>' +
        '</div>';

    $('main').after(stickyBannerFixedTemplate);
    $('main').after(stickyBannerStaticTemplate);

    $(document).on('click', '.sticky-banner-container-fixed a.mck-arrow-left-icon', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('.sticky-banner-container-fixed').addClass('collapse');

        $('.sticky-banner-container-fixed a.mck-arrow-left-icon').css('display', 'none');

        return false;
    });
}

function showShare() {
    $(document).on('click', '.new-icons a.mck-share-icon.social-contact', function (e) {
        var shareContainer = document.querySelector('.share-container');

        e.preventDefault();
        e.stopPropagation();

        shareContainer.classList.toggle('hidden');

        if (!$('.new-icons .share-container').hasClass('hidden')) {
            scrollShare = document.documentElement.scrollTop;
        }

        return false;
    });
}

function changeUrlSubscribe() {
    var btnList = document.querySelectorAll('a.btn');

    for (var i = 0; i < btnList.length; i++) {
        if (btnList[i].text === 'Subscribe') {
            btnList[i].href = btnSubscribeUrl;
        }
    }
}

var visibleY = function (el) {
    var rect = el.getBoundingClientRect(),
        top = rect.top,
        height = rect.height,
        el = el.parentNode;
    do {
        rect = el.getBoundingClientRect();
        if (top <= rect.bottom === false) return false;
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false;
        el = el.parentNode;
    } while (el != document.body);
    // Check its within the document viewport
    return top <= document.documentElement.clientHeight;
};

$(document).ready(function () {
    var $aside = $('aside.text-l.-span-right.disruptor.-signup-promo');
    downloadUrl = document.querySelector('.sticky-share aside figure ul li#main_0_articleShare_liArticlePdf_b a').href;

    $($aside).css('display', 'none');

    if ($($aside).css('display') == 'none') {
        document.querySelector('footer#main_0_divAboutAuthors').classList.remove('-signupAboveAboutAuthor');
    }

    stickyBannerTemplate();
    stickyHeaderTemplate(downloadUrl);
    showShare();

    changeUrlSubscribe();

    var $stickyBannerFixed = $('.sticky-banner-container-fixed');

    var $stickyBannerStatic = $('.sticky-banner-container-static');

    $(window).scroll(function () {
        changeUrlSubscribe();
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (document.querySelector('.sticky-share-tools').classList.contains('_show')) {
            if ($('.sticky-share-wrapper .sticky-share ul.new-icons').length === 0) {
                stickyHeaderTemplate(downloadUrl);
            }
            changeText();
            $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
            $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
        } else {
            $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
            $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
        }

        setTimeout(function () {
            if (visibleY(document.querySelectorAll('.sticky-share-wrapper .sticky-share ul')[0])) {
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
            }
        }, 200);

        if (currentScroll >= showSticky && !visibleY(document.querySelector('#main_0_articleShare2_articleActions figure ul'))) {
            $($stickyBannerStatic).addClass('hidden');
            $($stickyBannerFixed).removeClass('hidden');
        }

        if (!visibleY(document.querySelector('#main_0_articleShare2_articleActions figure ul'))) {
            $($stickyBannerStatic).addClass('hidden');
            $($stickyBannerFixed).removeClass('hidden');
        }

        if (visibleY(document.querySelector('#main_0_articleShare2_articleActions figure ul'))) {
            $($stickyBannerFixed).addClass('hidden');
            $($stickyBannerStatic).removeClass('hidden');
        }

        if (!$('.new-icons .share-container').hasClass('hidden')) {
            maxSharePos = scrollShare + 30;
            minSharePos = scrollShare - 30;
            if ((currentScroll >= maxSharePos) || (currentScroll <= minSharePos)) {
                $('.new-icons .share-container').addClass('hidden');
            }
        }

        if (currentScroll < showSticky) {
            $($stickyBannerFixed).addClass('hidden');
            $($stickyBannerStatic).addClass('hidden');
        }

    });
});