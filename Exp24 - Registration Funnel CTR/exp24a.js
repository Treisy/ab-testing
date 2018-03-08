const btnSuscribeTemplate = `<li class="suscribe">
        <a class="btn btn-fill btn-suscribe" aria-labelledby="Suscribe" href="#buttons"></a>
    </li>`;
const iconsContainer = document.querySelector('.sticky-share figure ul');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', AddStyles);
    document.addEventListener('DOMContentLoaded', changeText);
    document.addEventListener('DOMContentLoaded', removeIcons);
    document.addEventListener('DOMContentLoaded', addIcon);
};

function changeText() {
    const stickyTitle = document.getElementsByClassName('sticky-share-title')[0];

    stickyTitle.innerText = 'Making it in America: Revitalizing US manufactoring';
};

function removeIcons() {
    iconsContainer.removeChild(document.querySelector('li .mck-linkedin-icon').parentElement);
    iconsContainer.removeChild(document.querySelector('li .mck-twitter-icon').parentElement);
    iconsContainer.removeChild(document.querySelector('li .mck-facebook-icon').parentElement);
};

function AddStyles() {
    const css = `.sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.mck-share-icon {
        background-color: #B4BF25;   
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.mck-share-icon:before {
        color: #FFFFFF; 
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.btn-suscribe {
        margin-top: 0;
        font-size:16px;
        padding-top: 27px;
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li>a.btn-suscribe:before {
        content: "Suscribe";
    }

    .sticky-share-tools._show .sticky-share-outer-wrapper .sticky-share-wrapper .sticky-share ul>li.suscribe {
        width: auto;
    }
    `;

    let styleElement = document.createElement('STYLE');

    let style = document.createTextNode(css);

    styleElement.appendChild(style);
    document.head.appendChild(styleElement);
};

function addIcon(){
    const iconShare = `<li>
            <a data-capture-key="share-this-article" data-show-popup="login-overlay" class="interactive-link show-popup mck-share-icon download-this-article" aria-labelledby="share-interactive" role="button" target="_blank"></a>
        </li>`
    const iconsArray = [];

    let download = document.querySelector('.sticky-share figure ul li .mck-download-icon').parentElement;

    let print = document.querySelector('.sticky-share figure ul li .mck-print-icon').parentElement;

    let iconPrint = `<li>${ print.innerHTML }</li>`;
    let iconDownload = `<li>${ download.innerHTML }</li>`;

    iconsArray.push(btnSuscribeTemplate);
    iconsArray.push(iconDownload);
    iconsArray.push(iconPrint);
    iconsArray.push(iconShare);

    
    iconsContainer.innerHTML = iconsArray.join('');
};

