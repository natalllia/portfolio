const iconMenu = document.querySelector('.header__icon')
const menuBody = document.querySelector('.header__menu')

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')

    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
};

const menuLinks = document.querySelectorAll('.scroll[data-goto]')
if (menuLinks.length > 0) {
  menuLinks.forEach((el) => {
    el.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
       const gotoBlockValue = gotoBlock.getBoundingClientRect().top

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')

        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoBlockValue,
        duration: 2000,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}




