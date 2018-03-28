var showSticky = 3000;

function changeText() {
    $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
}

function stickyBannerTemplate() {
    var stickyTemplate = '<div class="sticky-banner-container">' +
                            '<div class="sticky-banner-outer-wrapper">'+
                                '<div class="sticky-banner-wrapper">' +
                                    '<span class="sticky-banner-title">Nunc ornare nisl ut risus gravida, eu rhoncus</span>' +
                                    '<a class="mck-arrow-left-icon hidden" href="#" name="collapse"></a>'+
                                    '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="/user-registration/register"></a>' +
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

$(document).ready(function() {
    stickyBannerTemplate();

    $(window).scroll(function() {

        setTimeout(function() {
            if ($('.sticky-share-tools').hasClass('_show')) {
                changeText();
                $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
            } else {
                $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');

            }

            if(window.scrollY >= showSticky && !visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
                $('.sticky-banner-container').addClass('fixed show');
            }

            if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
                $('.sticky-banner-container').removeClass('fixed show');
            }

            if(window.scrollY < showSticky) {
                $('.sticky-banner-container').removeClass('fixed show');
            }

        }, 200);
        
    });
});