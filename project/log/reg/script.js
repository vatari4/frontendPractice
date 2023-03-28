const wrapperCase1 = document.querySelector('.wrapperCase1');
const iconClose = document.querySelector('.icon-close');
const btnPers = document.querySelector('.btnLogin-popup');


function more(){
    if (wrapperCase1.classList.contains('more')) {
        wrapperCase1.classList.remove('more');
      } else {
        wrapperCase1.classList.add('more');
      }
};

iconClose.addEventListener('click', () => {
    wrapperCase1.classList.add('inactive-popup');
});

btnPers.addEventListener('click', () => {
    if (wrapperCase1.classList.contains('inactive-popup')) {
        wrapperCase1.classList.remove('inactive-popup');
      } else {
        wrapperCase1.classList.add('inactive-popup');
      }
});