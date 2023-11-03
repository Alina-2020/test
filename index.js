   
let btn = document.querySelector('.js-button');
let modal = document.querySelector('.content-info__image-modal');
let body = document.querySelector('body');
let cover = document.querySelector('.cover');
let btnClose = document.querySelector('.js-close');
btn.addEventListener('click', function(){
	modal.classList.add('active');
    cover.classList.add('active');
    body.classList.add('freeze');
})
  


btnClose.addEventListener('click', function(){
	modal.classList.remove('active');
    cover.classList.remove('active');
    body.classList.remove('freeze');
})
  





