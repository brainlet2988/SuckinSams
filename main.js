import './style.css'

const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuSvg1 = document.getElementById('mobile-menu-svg-1')
const mobileMenuSvg2 = document.getElementById('mobile-menu-svg-2')

if(mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuSvg1.classList.toggle('hidden')
    mobileMenuSvg2.classList.toggle('hidden')
  })
}
