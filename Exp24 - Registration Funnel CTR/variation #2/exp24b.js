var showSticky = 3000;
var currentScroll;

function changeText() {
    var textHeader = $('header h1.headline').text();
    $('.sticky-share-title').text(textHeader);
}

function stickyBannerTemplate() {
    var stickyTemplate = '<div class="sticky-banner-container">' +
                            '<div class="sticky-banner-outer-wrapper">'+
                                '<div class="sticky-banner-wrapper">' +
                                    '<span class="sticky-banner-title">Nunc ornare nisl ut risus gravida, eu rhoncus</span>' +
                                    '<a class="mck-arrow-left-icon hidden" href="#" name="collapse"></a>'+
                                    '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="/user-registration/register">Subscribe</a>' +
                                '</div>'+
                            '</div>'+
                        '</div>';

    $('main').after(stickyTemplate);

    $(document).on('click', '.sticky-banner-wrapper a.mck-arrow-left-icon', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.sticky-banner-container').addClass('collapse');

        $('.sticky-banner-container .sticky-banner-outer-wrapper .sticky-banner-wrapper a.mck-arrow-left-icon').css('display', 'none');

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

$(document).ready(function() {
    changeText();
    stickyBannerTemplate();
    showShare();

    $(window).scroll(function() {

        setTimeout(function() {
            if ($('.sticky-share-tools').hasClass('_show')) {
                $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
            } else {
                $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');

            }

            console.log('===============================================================');
            console.log('scrollY => ' + window.scrollY);
            console.log('document => '+ document.querySelector('#main_0_articleShare2_articleActions figure ul'));
            console.log('visible => ' + !visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul')));
            console.log('===============================================================');

            if(window.scrollY >= showSticky && !visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul'))) {
                console.log('add class');
                // $('.sticky-banner-container').addClass('fixed show');
                $('.sticky-banner-container').addClass('fixed');
                $('.sticky-banner-container').addClass('show');
            }

            if(!visibleY(document.querySelector('#main_0_articleShare2_articleActions figure ul'))) {
                $('.sticky-banner-container').addClass('fixed show');
            }

            if( visibleY(document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
                $('.sticky-banner-container').removeClass('fixed show');
            }

            if($('.share-container').css('display') == 'block') {

                if( ((document.documentElement.scrollTop >= (currentScroll + 30)) || ( document.documentElement.scrollTop <= (currentScroll - 30))) ||  ((window.scrollY.scrollTop >= (currentScroll + 30)) || ( window.scrollY.scrollTop <= (currentScroll - 30))) ) {
                    $('.new-icons .share-container').hide();
                }
            }

            if(window.scrollY < showSticky || document.documentElement.scrollTop <= showSticky) {
                $('.sticky-banner-container').removeClass('fixed show');
            }

        }, 200);
        
    });
});