var showSticky = 3000;
var timer;

function addIconsWithText(){
    var btnSubscribeTemplate = '<li class="new-icon"><a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a></li>';

    var iconDownload = '<li class="new-icon"><a href="/~/media/McKinsey/Business Functions/Organization/Our Insights/The agenda of a talen first CEO/An-agenda-for-the-talent-first-CEO.ashx" data-capture-key="download-this-article" rel="nofollow" data-show-popup="login-overlay" class="mck-download-icon social-contact" aria-labelledby="open-interactive" target="_blank">Download<span class="visually-hidden">Download this article</span> </a></li>';

    var iconPrint = '<li class="print new-icon"><a data-capture-key="print-this-article" data-show-popup="login-overlay" class="mck-print-icon social-contact" aria-labelledby="open-interactive" target="_blank">Print</a></li>';

    var iconShare = '<li class="new-icon"><a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a></li>';

    var iconsArray = [];

    iconsArray.push(iconDownload);
    iconsArray.push(iconPrint);
    iconsArray.push(iconShare);
    iconsArray.push(btnSubscribeTemplate);
    
    $('.sticky-share-tools._show').find('.sticky-share figure ul').append(iconsArray.join(''));
}

function stickyBannerTemplate() {
    var stickyTemplate = '<div class="sticky-banner-container">' +
                            '<div class="sticky-banner-outer-wrapper">'+
                                '<div class="sticky-banner-wrapper">' +
                                    '<span class="sticky-banner-title">Nunc ornare nisl ut risus gravida, eu rhoncus</span>' +
                                    '<a class="mck-arrow-left-icon hidden" href="#" name="collapse"></a>'+
                                    '<a class="btn btn-fill btn-subscribe" aria-labelledby="Subscribe" href="#buttons"></a>' +
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
    addIconsWithText();

    $(window).scroll(function() {
        if ($('.sticky-share-tools').hasClass('_show')) {
            $('.sticky-share-title').text('Making it in America: Revitalizing US manufactoring');
            $('.sticky-share-tools._show').find('.sticky-share figure ul li').addClass('hidden');
        } else {
            console.log('no show');
            $('.sticky-share-tools').find('.sticky-share figure ul li').removeClass('hidden');
            $('.sticky-share-tools').find('.sticky-share figure ul').remove('li.new-icon');
        }

        clearTimeout(timer);

        timer = setTimeout(function() {
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