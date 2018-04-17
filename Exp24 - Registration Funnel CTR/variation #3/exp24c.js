var showSticky = 3000;
var currentScroll;

function changeText() {
    var textHeader = $('header h1.headline').text();
    $('.sticky-share-title').text(textHeader);
}

function stickyHeaderTemplate() {
    var templateHeader = '<ul class="new-icons hidden">'+
            '<li><a href="mailto:?subject=From%20mckinsey.com%3a%20An%20agenda%20for%20the%20talent-first%20CEO&amp;body=I%20recommend%20you%20visit%20mckinsey.com%20to%20read%3a%0d%0a%0d%0aAn%20agenda%20for%20the%20talent-first%20CEO%0d%0ahttp%3a%2f%2fwww.mckinsey.com%2fbusiness-functions%2forganization%2four-insights%2fan-agenda-for-the-talent-first-ceo%3fcid%3deml-web" data-capture-key="email" data-show-popup="login-overlay" class="mck-email-icon social-contact" aria-labelledby="email-interactive"></a></li>'+
            '<li>'+
                '<a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive"></a>'+
                '<div class="share-container">'+
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
    $(document).on('click', '.sticky-drawer-container a.mck-arrow-left-icon', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.sticky-drawer-container').toggleClass('collapse');

        return false;
    });
}

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

function showShare() {
    $('.new-icons .share-container').hide();

    $(document).on('click', '.new-icons a.mck-share-icon.social-contact', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.share-container').slideToggle();
        currentScroll = document.documentElement.scrollTop;
        return false;
    });
}

$(document).ready(function(){
    changeText();
    stickyBannerTemplate();
    stickyHeaderTemplate();
    showShare();

    $(window).on('scroll', function sticky() {
        
        setTimeout(function() {
            currentScroll = window.scrollY || document.documentElement.scrollTop;

            if ($('.sticky-share-tools').hasClass('_show')) {
                if( $('.sticky-share-wrapper .sticky-share ul.new-icons').length === 0 ) {
                    stickyHeaderTemplate();
                }
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

            if($('.share-container').css('display') == 'block') {

                if( (currentScroll >= (currentScroll + 30)) || (currentScroll <= (currentScroll - 30)) ){
                    $('.new-icons .share-container').hide();
                }
            }
            
            if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
               $('.sticky-drawer-container').removeClass('show');
            }
        }, 200);
    });
});
