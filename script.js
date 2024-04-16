const nav = document.querySelector('nav');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');


if (screen.width > 560) {
    nav.setAttribute('data-visible', 'false')
    mobileNavToggle.setAttribute('aria-expanded', 'false')
}

mobileNavToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')
    if (visibility === 'false') {
        nav.setAttribute('data-visible', 'true')
        mobileNavToggle.setAttribute('aria-expanded', 'true')
    } else {
        nav.setAttribute('data-visible', 'false')
        mobileNavToggle.setAttribute('aria-expanded', 'false')
    }
});
