let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
 }

 document.addEventListener('scroll', ()=> {
   const header = document.querySelector('header');

   if(window.scrollY>0){
      header.classList.add('scrolled');
   }else{
      header.classList.remove('scrolled');
   }
 });

 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay:{
      delay:3500,
      disableOnInteraction:false,
   }
 });
