var showSticky = 3000;
var currentScroll;
var scrollShare;

function changeText() {
    var textHeader = $('header h1.headline').text();
    $('.sticky-share-title').text(textHeader);
}

function stickyHeaderTemplate() {
    var articleTitle = $('header h1.headline').text();
    var subject = 'From mckinsey.com: ' + articleTitle;
    var urlArticle = window.location.protocol + window.location.hostname + window.location.pathname;
    var body = 'I recommend you visit mckinsey.com to read:' + '\n\n' + articleTitle + '\n' + urlArticle;

    var templateHeader = '<ul class="new-icons hidden">'+
            '<li><a href="mailto:?subject='+ subject +  '&amp;body=' + encodeURIComponent(body)  + '" data-capture-key="email" data-show-popup="login-overlay" class="mck-email-icon social-contact" aria-labelledby="email-interactive"></a></li>'+
            '<li>'+
                '<a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive"></a>'+
                '<div class="share-container hidden">'+
                    '<ul>'+
                        '<li><a href="#0" class="mck-linkedin-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on LinkedIn</span></a></li>'+
                        '<li><a href="#0" class="mck-twitter-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Twitter</span></a></li>'+
                        '<li><a href="#0" class="mck-facebook-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Facebook</span></a></li>'+
                        '<li><a href="mailto:?subject='+ subject +  '&amp;body=' + encodeURIComponent(body)  + '" class="mck-email-icon" role="button"><span class="visually-hidden">Email this article</span></a></li>'+
                    '</ul>'+
                '</div>'+
            '</li>'+
            '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="/user-registration/register">Subscribe</a></li>'+
        '</ul>';

    $('.sticky-share-wrapper .sticky-share ul').after(templateHeader);
}

function stickyBannerTemplate() {
    $(document).on('click', '.sticky-drawer-container a.mck-arrow-left-icon', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.sticky-drawer-container').toggleClass('collapse');

        return false;
    });
}

function showShare() {
    $(document).on('click', '.new-icons a.mck-share-icon.social-contact', function(e){
        var shareContainer = document.querySelector('.share-container');
        
        e.preventDefault();
        e.stopPropagation();

        shareContainer.classList.toggle('hidden');

        if ( !$('.new-icons .share-container').hasClass('hidden') ) {
            scrollShare = document.documentElement.scrollTop;
        }

        return false;
    });
};

var visibleY = function(el){
    var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
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
  }

$(document).ready(function(){
    stickyBannerTemplate();
    stickyHeaderTemplate();
    showShare();

    $(window).on('scroll', function sticky() {
        
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if ($('.sticky-share-tools').hasClass('_show')) {
            if( $('.sticky-share-wrapper .sticky-share ul.new-icons').length === 0 ) {
                stickyHeaderTemplate();
            }
            changeText();
            $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
            $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
        } else {
            $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
            $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
        }

        if( currentScroll >= showSticky )  {
            $('.sticky-drawer-container').addClass('show');
        }else {
            $('.sticky-drawer-container').removeClass('show');
        }

        if ( !$('.new-icons .share-container').hasClass('hidden') ) {
            maxSharePos = scrollShare + 30;
            minSharePos = scrollShare - 30;
            if( (currentScroll >= maxSharePos) || (currentScroll <= minSharePos) ) {
                $('.new-icons .share-container').addClass('hidden');
            }
        }
        
        if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
            $('.sticky-drawer-container').removeClass('show');
        }
    });
});
