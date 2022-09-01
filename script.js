let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('header .wholenav .navbar')

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".stylist-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });

 var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     540: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
  },
});

document.querySelectorAll('.image-container img').forEach(image=>{
	image.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src')
	}
});

document.querySelector('.popup-image span').onclick = () =>{
	document.querySelector('.popup-image').style.display = 'none';
}