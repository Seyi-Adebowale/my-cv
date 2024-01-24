const navLinks = document.querySelector("#navlinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-800px";
}


// var swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//       delay: 3000,
//       disableOnInteraction: false, 
//     },
// });

document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("header");
  var scrollThreshold = 500; 

  window.addEventListener("scroll", function() {
      if (window.scrollY > scrollThreshold) {
          header.classList.add("fixed");
      } else {
          header.classList.remove("fixed");
      }
  });
});

