// const lightbox = () => {

//     const projectButton = document.querySelectorAll('.swiper__button')
//     const projectInfo = document.querySelectorAll('.swiper__info')
//     const closeButton = document.querySelector('.swiper__lightbox__close')
//     const lightboxContainer = document.querySelectorAll('.swiper__lightbox__container')

//     const openLightbox = () => {
        
//         // lightboxContainer.classList.add('swiper__lightbox__container--active')

//         lightboxContainer.forEach()


//         console.log(projectInfo)
        
    // }

    // const closeLightbox = () => {
    //     lightboxContainer.classList.remove('swiper__lightbox__container--active')
    // }

    // projectButton.addEventListener('click', openLightbox)
    // closeButton.addEventListener('click', closeLightbox)
//     console.log(lightboxContainer)
    
// }

// lightbox()

const box = () => {

    // Get swiper buttons from DOM
    const swiperButtons = document.querySelectorAll('.swiper__button')
    const closeButton = document.querySelectorAll('.swiper__box__close')
    const boxContainer = document.querySelectorAll('.swiper__box__container')
    const blurOverlay = document.querySelector('.overlay')
    

    const openBox = (event) => {
        const currentDataName = event.target.dataset.name

        const currentBox = document.querySelector(`.swiper__box__container[data-name="${currentDataName}"]`)

        blurOverlay.classList.add('overlay--active')

        boxContainer.forEach(box => box.classList.remove('swiper__box__container--active'))

        currentBox.classList.add('swiper__box__container--active')

        console.log(currentBox)
    }
    
    const closeBox = (event) => {

        blurOverlay.classList.remove('overlay--active')

        boxContainer.forEach(box => box.classList.remove('swiper__box__container--active'))
        
    }


    // Add click events for each button found
    swiperButtons.forEach(button => button.addEventListener('click', openBox))
    closeButton.forEach(button => button.addEventListener('click', closeBox))
    blurOverlay.addEventListener('click', closeBox)
}
box()

