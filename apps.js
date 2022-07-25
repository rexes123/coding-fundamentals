const header = document.querySelector('.header')

window.addEventListener('mousemove', (e) => {
    if (window.scrollY <= 30) return

    if (e.clientY <= 100) {
        showHeader()
    } else {
        hideHeader()
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY <= 30) {
        showHeader()
    } else {
        hideHeader()
    }
})

function hideHeader() {
    header.classList.add('header--hidden')
}

function showHeader() {
    header.classList.remove('header--hidden')
}