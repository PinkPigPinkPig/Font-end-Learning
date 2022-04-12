var btnOpen = document.querySelector(".btn-open-modal")
var modal = document.querySelector(".modal")
var btnClose = document.querySelector(".modal-popup-footer button")
var iconClose = document.querySelector(".modal-popup-header i")

function toggleModal(){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', (e) => {
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
