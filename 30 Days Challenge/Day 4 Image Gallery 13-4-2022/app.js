let images = document.querySelectorAll('.image img')
let btnPrev = document.querySelector(".btn.prev")
let btnNext = document.querySelector(".btn.next")
let iconClose = document.querySelector(".close")

const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.large-img img')


let currentIndex = 0
images.forEach((item, index) => {
    item.addEventListener('click', () =>{
        currentIndex = index;
        showGallery()
    })
});

function showGallery() {
	gallery.classList.add('show')
	galleryImg.src = images[currentIndex].src
}

iconClose.addEventListener('click', () => {
    gallery.classList.remove('show')
})

btnNext.addEventListener('click', () =>{
    if(currentIndex != images.length - 1){
        currentIndex++
    }else{
        currentIndex = 0
    }

    showGallery()
})

btnPrev.addEventListener('click', () =>{
    if(currentIndex != 0){
        currentIndex--
    }else{
        currentIndex = images.length - 1
    }
    showGallery()
})

document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) gallery.classList.remove('show')
})