const root = document.getElementById('root');
const createHeader = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <header class="head">
                  <div class="head-logo">
                        <img class="head-logo-image"
                             src="favicon_io/android-chrome-192x192.png"
                             alt="04.empat">
                        <h1 class="head-logo-label">empat</h1>
                  </div>
            </header>
    `,
    );
};

const createNavigationMenu = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        ` 
            <div class="navigation-menu">
                <ul class="navigation-menu-items">
                    <li class="navigation-menu-item">
                        <h3 class="menu-head">Traveling</h3>
                        <ul class="sub-items">
                            <li class="sub-item"><a>Apa ?</a></li>
                            <li class="sub-item"><a>Kenapa ?</a></li>
                            <li class="sub-item"><a>Bagaimana ?</a></li>
                        </ul>
                    </li>
                    <li class="navigation-menu-item">
                        <h3 class="menu-head">Budgeting</h3>
                        <ul class="sub-items">
                            <li class="sub-item"><a>Apa ?</a></li>
                            <li class="sub-item"><a>Kenapa ?</a></li>
                            <li class="sub-item"><a>Bagaimana ?</a></li>
                        </ul>
                    </li>
                    <li class="navigation-menu-item">
                        <h3 class="menu-head">
                            <a>Persiapan</a>
                        <h3>
                    </li>
                </ul>
            </div>
        `,
    );
};

const createNavigation = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <nav class="navigation">
                  <div class="navigation-container">
                        <button class='navigation-drawer'>
                              <span class="navigation-drawer-icon material-icons-round"> menu </span>
                        </button>
                        <h2 class="navigation-title">Budget &amp; Travel</h2>
                        <button class="navigation-drawer">
                              <span class="navigation-drawer-icon material-icons-round"> more_vert </span>
                        </button>
                  </div>
            </nav>
    `,
    );
};


const createBackdrop = function () {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="backdrop"></div>
        `,
    );
};

const initPage = function () {
    createHeader();
    createBackdrop();
    createNavigationMenu();
    createNavigation();
};

window.onload = initPage();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('servWork.js')
        .then((registration) => {
            console.log('Service Worker Registered !');
            console.log(registration);
        })
        .catch((error) => {
            console.log('Sevice Worker Registration Failed !');
            console.log(error);
        });
}
