const btnOpen = document.querySelector(".btn-search")
const content = document.querySelector(".content")

btnOpen.addEventListener('click', () => {
    content.classList.toggle('open')
})