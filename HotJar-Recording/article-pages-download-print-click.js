var sc = document.createElement('script');
sc.setAttribute('type', 'text/javascript');
sc.textContent =
  '    (function(h,o,t,j,a,r){ \n' +
  '        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; \n' +
  '        h._hjSettings={hjid:416998,hjsv:6}; \n' +
  '        a=o.getElementsByTagName("head")[0]; \n' +
  '        r=o.createElement("script");r.async=1; \n' +
  '        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; \n' +
  '        a.appendChild(r); \n' +
  '				 console.log("hj-true"); ' +
  '    })(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv="); \n';

document.getElementsByTagName('head')[0].appendChild(sc);

$(document).ready(function() {
  window.hj =
    window.hj ||
    function() {
      (hj.q = hj.q || []).push(arguments);
    };

  console.log('hj-doc ready');
  hj('tagRecording', ['Visited Article']);

  $('.sticky-share-container aside figure ul li a.download-this-article').on(
    'click',
    function() {
      console.log('hj-download click');
      hj('tagRecording', ['Download click']);
      hj('trigger', 'download_click');
    }
  );
  $('.sticky-share-container aside figure ul li a.print-this-article').on(
    'click',
    function() {
      console.log('hj-print click');
      hj('tagRecording', ['Print click']);
      hj('trigger', 'print_click');
    }
  );
});
