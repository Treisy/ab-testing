function changeText() {
    $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
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

$(document).ready(function(){
    stickyBannerTemplate();

    $(window).on('scroll', function sticky() {
        setTimeout(function() {
            if ($('.sticky-share-tools').hasClass('_show')) {
                changeText();
                $('.sticky-share-wrapper .sticky-share ul.new-icons').removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul').first().addClass('hidden');
                $('.sticky-drawer-container').addClass('show');
            } else {
                $('.sticky-share-wrapper .sticky-share ul').first().removeClass('hidden');
                $('.sticky-share-wrapper .sticky-share ul.new-icons').addClass('hidden');
                $('.sticky-drawer-container').removeClass('show');
            }
            
            if( visibleY( document.querySelector('#main_0_articleShare2_articleActions figure ul') )) {
               $('.sticky-drawer-container').removeClass('show');
            }
        }, 300);
    });
});
