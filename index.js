const root = document.getElementById('root');
const writeHeader = function () {
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

const writeNavigation = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <nav class="navigation">
                  <div class="navigation-container">
                        <button class='navigation-drawer'>
                              <span class="navigation-drawer-icon material-icons-round"> menu </span>
                        </button>
                        <h2 class="navigation-title">Travel & Bugdet</h2>
                        <button class="navigation-drawer">
                              <span class="navigation-drawer-icon material-icons-round"> more_vert </span>
                        </button>
                  </div>
            </nav>
    `,
    );
};

const initPage = function () {
    writeHeader();
    writeNavigation();
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
