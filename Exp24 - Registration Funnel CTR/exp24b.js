const btnSuscribeTemplate = `<li>
        <a class="btn btn-fill btn-suscribe" aria-labelledby="Suscribe" href="#buttons"></a>
    </li>`;
const iconsContainer = document.querySelector('.sticky-share figure ul');


function changeText() {
    const stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
}


function removeIcons() {
    while (iconsContainer.hasChildNodes()) {
        iconsContainer.removeChild(iconsContainer.firstChild);
    }
}


function AddStyles() {
    const css = `.sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share          ul>li>a.mck-download-icon.social-contact,
    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share          ul>li>a.mck-print-icon.social-contact,
    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share          ul>li>a.mck-share-icon.social-contact  {
        background-color: transparent;
        font-size: 16px;
        color: #00ADEF;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        font-family: HelveticaNeue;
        line-height: normal;
        letter-spacing: normal;
    }
    
    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.social-contact:before {
        color: #00ADEF;
        top: 16px;
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.btn-suscribe {
        margin-top: 0;
        font-size:16px;
        padding-top: 27px;
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.btn-suscribe:before {
        content: "Suscribe";
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li {
        width: auto;
    }
    `;

    let styleElement = document.createElement('STYLE');

    let style = document.createTextNode(css);

    styleElement.appendChild(style);
    document.head.appendChild(styleElement);
}

function addIconsWithText(){
    const iconDownload = `<li>
            <a href="/~/media/McKinsey/Business Functions/Organization/Our Insights/The agenda of a talen first CEO/An-agenda-for-the-talent-first-CEO.ashx" data-capture-key="download-this-article" rel="nofollow" data-show-popup="login-overlay" class="mck-download-icon social-contact" aria-labelledby="open-interactive" target="_blank">Download
                <span class="visually-hidden">Download this article</span> 
            </a>
        </li>`;

    const iconPrint = `<li class="print">
            <a data-capture-key="print-this-article" data-show-popup="login-overlay" class="mck-print-icon social-contact" aria-labelledby="open-interactive" target="_blank">Print</a>
        </li>`;

    const iconShare = `<li>
            <a data-capture-key="share-this-article" data-show-popup="login-overlay" class="mck-share-icon social-contact" aria-labelledby="share-interactive" target="_blank">Share</a>
        </li>`
    const iconsArray = [];

    iconsArray.push(iconDownload);
    iconsArray.push(iconPrint);
    iconsArray.push(iconShare);
    iconsArray.push(btnSuscribeTemplate);
    
    iconsContainer.innerHTML = iconsArray.join('');
}

//Calls
AddStyles();
changeText();
removeIcons();
addIconsWithText();