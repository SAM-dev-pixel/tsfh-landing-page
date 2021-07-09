/*===== NAVBAR =====*/
const burger = document.querySelector('.burger');
const navLinkCont = document.querySelector('.nav-links-cont');
//Burger click
burger.addEventListener('click', () => {
  navLinkCont.style.left = 0;
  navLinkCont.style.opacity = 1;
  document.body.style.overflow = 'hidden';
});
//navLinkCont click
navLinkCont.addEventListener('click', () => {
  navLinkCont.style.left = '-100%';
  navLinkCont.style.opacity = 0;
  document.body.style.overflow = 'auto';
});

//Search Icon Click
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
searchIcon.addEventListener('click', (e) => {
  e.preventDefault();
  searchBox.classList.add('click');
  document.body.style.overflow = 'hidden';
});

//Close Button Click
document.querySelector('.close-btn').addEventListener('click', () => {
  searchBox.classList.remove('click');
  document.body.style.overflow = 'auto';
});

/*=====SHOP ITEMS =====*/
const items = document.querySelectorAll('.item');
function itemOverlay() {
  items.forEach((item,i) => {
    /*if(item.hover) { 
      alert('ok');
      document.querySelectorAll('.item-title')[i].style.color = '#eee';
      document.querySelectorAll('.item-stock')[i].style.color = 'pink';
    }*/
    item.addEventListener('mouseenter', () => alert('ok'));
  });
}
itemOverlay();
