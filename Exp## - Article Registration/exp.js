// Ensures the optimizely object is defined globally using
window[optimizely] = window[optimizely] || [];

// Declare Objects
objCommon = {};
objSignIn = {};
objSignUp = {};
objForgotPassword = {};
objCommon.methods = {};

// Constants
objCommon.scrollStep = 1250;
objCommon.scrollInterval = 3;
objCommon.firstRun = true;


// ========== Common methods ==========
objCommon.methods = (function () {
    'use strict';

    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    function sendData() {
        // code
    }

    function clearInputs() {
        $('.alert.error.no-pading-bottom.no-margin-botto').css({
            display: 'none'
        });

        $('#name_signUp').val('');
        $('#email_signUp').val('');
        $('#company_signUp').val('');
        $('#role_signUp').val('');

        $('#email_signIn').val('');
        $('#password_signIn').val('');

        $('#email_forgotPassword').val('');

        // $('#form_SignUp').validate().resetForm();
        // $('#form_SignIn').validate().resetForm();
        // $('#form_forgotPassword').validate().resetForm();

        $('.captcha-wrapper .error p').remove();

        // if (window.exp.common.methods.currentWindow === "._signUp") {
        //     grecaptcha.reset(window.widgetId1);
        // } else if (
        //     window.exp.common.methods.currentWindow === "._forgotPassword"
        // ) {
        //     grecaptcha.reset(window.widgetId2);
        // }
    }

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.toString().replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function getToken() {
        // code
    }

    function getCaptcha() {
        // code
    }

    function validateEmail(email) {
        'use strict';
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function scrollListenner(e) {
        console.log('start listenner');
        var perc = window.scrollY || window.pageYOffset;
        var windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            console.log(
                'Page Width:' +
                windowWidth +
                'this exp Form Not showing below 768px width'
            );
        }

        if (perc >= objCommon.scrollStep && windowWidth > 768 && !/Mobi/.test(navigator.userAgent)) {
            objCommon.fromEmail = false;
            window.scrollTo(0, objCommon.scrollStep - 2);
            window.onscroll = null;
            $(window).off('scroll', objCommon.methods.scrollListenner);

            objCommon.methods.setCookie('abScrollY', perc, 1);

            if (objCommon.methods.getParameterByName('cid' !== null)) {
                objCommon.methods.showABForm('._signIn');
            } else if (objCommon.isNew) {
                objCommon.methods.showABForm('._signUp');
            } else if (!objCommon.isSignedIn) {
                console.log('no logged in');
                objCommon.methods.showABForm('._signIn');
            }

            $('body').css({
                width: '100%',
                position: 'fixed',
                'overflow-y': 'scroll',
                top: -(objCommon.scrollStep - 2)
            });

            if (!!objCommon.methods.detectIE) {
                $('body').addClass('fixedBody');
            }

            window.scrollTo(0, perc + 1);
        }
    }

    function focusTitle(element) {
        setTimeout(function () {
            $(element).focus();
        }, 100);
    }

    function showABForm(target) {
        if (objCommon.firstRun) {
            $(target + '.popup-window').show();
        } else {
            $(target + '.popup-window')
                .hide();
            // .fadeIn('fast');
        }

        objCommon.firstRun = false;
        objCommon.currentWindow = target;
    }

    function hideForm(target) {
        $(target + '.popup-window').hide();

        setTimeout(function () {
            if (objCommon.toClose) {}
        }, 50);

        return false;
    }

    function botCheck() {
        var botPattern =
            '(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)';
        var re = new RegExp(botPattern, 'i');
        var userAgent = navigator.userAgent;
        if (re.test(userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    var setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };

    function readCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    function hideAllWindowsBut(toHide) {
        var arrayForms = ['_signIn', 'signUp', 'forgotPassword'];

        arrayForms
            .filter(function (item) {
                return item != objCommon.toHide;
            })
            .map(function (item) {
                objCommon.methods.hideForm(item);
            });

        objCommon.currentWindow = toHide;
    }

    function switchWindow(windowToOpen) {
        objCommon.methods.clearInputs();
        objCommon.toClose = false;
        objCommon.methods.hideAllWindowsBut(windowToOpen);
        objCommon.methods.showABForm(windowToOpen);

        // Bring captcha to front
        objCommon.methods.checkRecaptchaWrapper(true);
    }

    function moveCaptchaFront() {
        objCommon.methods.checkCaptcha = setInterval(objCommon.methods.checkRecaptchaWrapper, 500);
    }

    function checkRecaptchaWrapper(omit) {
        if ($('.g-recaptcha-bubble-arrow').length === 4 || omit) {
            $('body>div').slice(-2).css({
                position: 'fixed'
            });
            clearInterval(objCommon.methods.checkCaptcha);
        }
    }

    return {
        scrollListenner: scrollListenner,
        focusTitle: focusTitle,
        showABForm: showABForm,
        hideForm: hideForm,
        botCheck: botCheck,
        sendData: sendData,
        validateEmail: validateEmail,
        setCookie: setCookie,
        readCookie: readCookie,
        hideAllWindowsBut: hideAllWindowsBut,
        getCaptcha: getCaptcha,
        getToken: getToken,
        getParameterByName: getParameterByName,
        clearInputs: clearInputs,
        detectIE: detectIE,
        moveCaptchaFront: moveCaptchaFront,
        checkRecaptchaWrapper: checkRecaptchaWrapper,
        switchWindow: switchWindow
    };
})();

// ========== End Common methods ==========

function activateForgotReload() {
    // add code
}

// Document is ready
document.addEventListener(
    'DOMContentLoaded',
    function () {
        console.log('Running exp Register page');

        if (objCommon.methods.botCheck()) return false;

        var vnum = unescape(objCommon.methods.readCookie('s_vnum'));
        var userVisits = vnum ? vnum.split('&')[1].split('=')[1] : 0;

        objCommon.methods.isNew = userVisits < 1;

        objCommon.isSignedIn = McKinsey.LoginStatus === 'logged_in';

        var readScrollY = parseInt(objCommon.methods.readCookie('abScrollY'));

        // Check if postback signed in
        var abSignedIn = !!objCommon.methods.readCookie('abSignedIn');

        if (abSignedIn && objCommon.isSignedIn) {
            if (objCommon.methods.readCookie('abSignedIn') === 'signin') {
                document.querySelector(
                        '#_signUp_confirmation h1.confirmationTitle'
                    ).innertText =
                    'You are now signed in';
            }

            $('#_signUp_confirmation')
                .animate({
                    bottom: 0
                })
                .show();

            setTimeout(function () {
                $('#_signUp_confirmation').animate({
                    bottom: -150
                }, {
                    complete: function () {
                        $(this).hide();
                        objCommon.methods.setCookie('abSignedIn', '', 0);
                        objCommon.methods.setCookie('abScrollY', 0, 0);
                    }
                });
            }, 1500);

            $('#confirmationCloseBtn').on('click', function () {
                $('#_signUp_confirmation').animate({
                    bottom: -150
                }, {
                    complete: function () {
                        $(this).hide();
                        objCommon.methods.setCookie('abSignedIn', '', 0);
                        objCommon.methods.setCookie('abScrollY', 0, 0);
                    }
                });
            });

            window.scrollTo(0, readScrollY);
            $(window).on('scroll', null);
            window.onscroll = null;

            return false;
        }

        // It's signed in already
        if (objCommon.isSignedIn) {
            return false;
        }

        var RC_SITE_KEY = '6LdC5twSAAAAAF0dePIbY_ckeF05mKdYYJXn7uTg';

        $('.wrapper .popup-content').wrap('<div class="newPopupWrapper"></div>');


        $(document).on('click', '#fromSignUpToSignIn', function () {
            alert('click #fromSignUpToSignIn');
            objCommon.methods.switchWindow('._signIn');
            return false; // prevents the page jump
        });

        $(document).on('click', '#fromForgotToSignIn', function () {
            objCommon.methods.switchWindow('._signIn');
            return false; // prevents the page jump
        });

        $(document).on('click', '#fromForgotToSignUp', function () {
            objCommon.methods.switchWindow('._signUp');
            return false; // prevents the page jump
        });

        $(document).on('click', '#fromSignInToForgot', function () {
            objCommon.methods.switchWindow('._forgotPassword');
            return false; // prevents the page jump
        });

        $(document).on('click', '#fromSignInToSignUp', function () {
            objCommon.methods.switchWindow('._signUp');
            return false; // prevents the page jump
        });

        activateForgotReload();

        $('.close-btn-holder').on('click', function () {
            console.log('click close');
            if (!fromEmail) {
                window.scrollTo(0, scrollStep - 2);
            }

            objCommon.toClose = true;
            objCommon.methods.clearInputs();
            objCommon.methods.hideAllWindowsBut('hideAll');
            objCommon.firstRun = true;

            // Track No thank you clicks
            // window[optimizely].push({
            //     type: 'trackEvent',
            //     eventName: 'nothankyou'
            // });

            return false;

        });

        $(window).on('scroll', objCommon.methods.scrollListenner);
        window.onscroll = objCommon.methods.scrollListenner;

    },
    false
);