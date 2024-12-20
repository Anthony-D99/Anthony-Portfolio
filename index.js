const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const planet1 = document.querySelector('.img1')
const planet2 = document.querySelector('.img2')
const planet3 = document.querySelector('.img3')
const planet4 = document.querySelector('.img4')

planet1.addEventListener('click',()=>{
  planet1.classList.remove('rotate')
  planet1.setAttribute('src', './assets/png/digital-marketing-meeting.jpg')
})
planet2.addEventListener('click',()=>{
  planet2.classList.remove('rotate')
  planet2.setAttribute('src', './assets/png/test.png')
})
planet3.addEventListener('click',()=>{
  planet3.classList.remove('rotate')
  planet3.setAttribute('src', './assets/jpg/Work Day Scheduler-2.jpg')
})
planet4.addEventListener('click',()=>{
  planet4.classList.remove('rotate')
  planet4.setAttribute('src', './assets/png/tykchase.png')
})



hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
