var showSticky = 3000;
var currentScroll;

function changeText() {
    var textHeader = $('header h1.headline').text();
    $('.sticky-share-title').text(textHeader);
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
    showShare();

    $(window).on('scroll', function sticky() {
        
        setTimeout(function() {
            if ($('.sticky-share-tools').hasClass('_show')) {
                $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
            } else {
                $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
            }

            if((window.scrollY >= showSticky) || document.documentElement.scrollTop >= showSticky )  {
                $('.sticky-drawer-container').addClass('show');
            }else {
                $('.sticky-drawer-container').removeClass('show');
            }

            if($('.share-container').css('display') == 'block') {

                if( ((document.documentElement.scrollTop >= (currentScroll + 30)) || ( document.documentElement.scrollTop <= (currentScroll - 30))) ||  ((window.scrollY.scrollTop >= (currentScroll + 30)) || ( window.scrollY.scrollTop <= (currentScroll - 30))) ) {
                    $('.new-icons .share-container').hide();
                }
            }
            
            if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
               $('.sticky-drawer-container').removeClass('show');
            }
        }, 200);
    });
});
