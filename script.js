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

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");
  var scrollThreshold = 100;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });

  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("#navlinks ul li a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const menuLink = document.querySelector(
          `#navlinks ul li a[href="#${sectionId}"]`
        );

        if (menuLink && entry.isIntersecting) {
          // Add "active" class to the corresponding menu link
          menuLinks.forEach((link) => link.classList.remove("active"));
          menuLink.classList.add("active");
        }
      });

      // Additional check for the case when no section is intersecting
      const noSectionIntersecting = entries.every(
        (entry) => !entry.isIntersecting
      );
      if (noSectionIntersecting) {
        // Clear "active" class from all menu links
        menuLinks.forEach((link) => link.classList.remove("active"));
      }
    },
    { threshold: 0.5 }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  const animatedSections = document.querySelectorAll(".section-animated");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const sectionObserver = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
