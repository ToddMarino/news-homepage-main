const navBtn = document.querySelector('.nav-btn')
const navWindow = document.querySelector('#navigation')
const links = document.querySelectorAll('li a')

console.log(links)

navBtn.addEventListener('click', () => {
    if (navWindow.getAttribute('data-expanded') === "false") {
        navWindow.setAttribute('data-expanded', "true")
        navBtn.setAttribute('data-visible', 'true')
    } else {
        navWindow.setAttribute('data-expanded', "false")
        navBtn.setAttribute('data-visible', 'false')
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        navWindow.setAttribute('data-expanded', "false")
        navBtn.setAttribute('data-visible', 'false')
    })
})