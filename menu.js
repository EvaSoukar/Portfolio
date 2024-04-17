const toggleMenu = () => {
   
    const menuButtons = document.querySelectorAll('.menu__link')

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.menu__link--current')?.classList.remove('menu__link--current')
            button.classList.add('menu__link--current')
        })
    })
}
toggleMenu()