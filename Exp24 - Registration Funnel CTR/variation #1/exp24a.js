var showSticky = 3000;
var hideSticky = 13200;
var currentScroll;
var scrollShare;

function changeText() {
    var textHeader = $('header h1.headline').text();
    $('.sticky-share-title').text(textHeader);
}

function stickyHeaderTemplate() {
    var templateHeader = '<ul class="new-icons hidden">'+
                            '<li>'+
                                '<a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive">Share</a>'+
                                '<div class="share-container hidden">'+
                                    '<ul>'+
                                        '<li><a href="#0" class="mck-linkedin-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on LinkedIn</span></a></li>'+
                                        '<li><a href="#0" class="mck-twitter-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Twitter</span></a></li>'+
                                        '<li><a href="#0" class="mck-facebook-icon" data-cid="soc-web" role="button"><span class="visually-hidden">Share this article on Facebook</span></a></li>'+
                                        '<li><a href="mailto:?subject=From%20mckinsey.com%3a%20An%20agenda%20for%20the%20talent-first%20CEO&amp;body=I%20recommend%20you%20visit%20mckinsey.com%20to%20read%3a%0d%0a%0d%0aAn%20agenda%20for%20the%20talent-first%20CEO%0d%0ahttp%3a%2f%2fwww.mckinsey.com%2fbusiness-functions%2forganization%2four-insights%2fan-agenda-for-the-talent-first-ceo%3fcid%3deml-web" class="mck-email-icon" role="button"><span class="visually-hidden">Email this article</span></a></li>'+
                                    '</ul>'+
                                '</div>'+
                            '</li>'+
                            '<li class="subscribe"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="/user-registration/register">Subscribe</a></li>'+
                        '</ul>';

    $('.sticky-share-wrapper .sticky-share ul').after(templateHeader);    
}

function stickyBannerTemplate() {
    var template = '<div class="sticky-banner-container">'+
                        '<div class="sticky-banner">'+
                            '<div class="sticky-banner-outer-wrapper">'+
                                '<div class="sticky-banner-wrapper"><span class="sticky-banner-title">Stay current on your favorite topics</span>'+
                                '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="/user-registration/register">Subscribe</a><a href="javascript:void(0);" class="cta" name="cta" style="">No, thank you</a></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    $('main').after(template);

    $(document).on('click', '.sticky-banner-wrapper a.cta', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.sticky-banner-container').remove();
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
  };

$(document).ready(function() {
    stickyBannerTemplate();
    stickyHeaderTemplate();
    showShare();
    authorsSpacing();
    
    $(window).scroll(function() {
        currentScroll = window.scrollY || document.documentElement.scrollTop;
        
        setTimeout(function() { 
            if ($('.sticky-share-tools').hasClass('_show')) {
                if( $('.sticky-share-wrapper .sticky-share ul.new-icons').length === 0 ) {
                    stickyHeaderTemplate();
                }
                changeText();
                $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
            }else {
                $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
            }
    
            if( currentScroll >= showSticky ) {
                $('.sticky-banner').addClass('show');
            }else {
                $('.sticky-banner').removeClass('show');
            }
            
            if ( !$('.new-icons .share-container').hasClass('hidden') ) {
                maxSharePos = scrollShare + 30;
                minSharePos = scrollShare - 30;
                if( (currentScroll >= maxSharePos) || (currentScroll <= minSharePos) ) {
                    $('.new-icons .share-container').addClass('hidden');
                }
            }
    
            if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
                $('.sticky-banner').removeClass('show');
             }

        },200);
    });
});