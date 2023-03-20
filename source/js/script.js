const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.page-header__menu');

toggle.classList.add('toggle--closed');
menu.classList.add('page-header__menu--closed');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('toggle--closed');
  menu.classList.toggle('page-header__menu--closed');
})
