//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Work and Testimony Preview
const windowObject = window;
windowObject.addEventListener("scroll", function () {
  const scrollY = windowObject.scrollY;
  const horizontalScrollElement = document.getElementById("workPreview");
  const horizontalScrollElement2 = document.getElementById("testimonyPreview");

  horizontalScrollElement.scrollLeft = scrollY * 0.2;
  horizontalScrollElement2.scrollLeft = scrollY * 0.4;
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

// Heropage Section
sr.reveal(".hero-page .gradient-blue");
sr.reveal(".hero-page .gradient-v", { delay: 400, origin: "left" });
sr.reveal(".hero-page-headline h1", { delay: 200, origin: "left" });
sr.reveal(".hero-page-headline-about h1", {delay: 200, origin: "center"});
sr.reveal(".hero-page-headline-about p" , {delay: 500, origin: "center"});
sr.reveal(".tagline", { delay: 300, origin: "left" });
sr.reveal(".hero-page-headline p", { delay: 500, origin: "left" });
sr.reveal(".brands", { delay: 500 });
sr.reveal(".btn-blue", { delay: 600, origin: "left" });
sr.reveal(".preview");
sr.reveal("#testimonyPreview", { delay: 500 });


// Service Section
sr.reveal(".services .gradient-lightblue");
sr.reveal(".services h1", { delay: 600 });
sr.reveal(".services p", { delay: 800 });
sr.reveal(".service-box");
sr.reveal(".services .gradient-blue", { delay: 600 });

// About Section
sr.reveal(".car");
sr.reveal(".rent-now-ultimate", { delay: 500 });
sr.reveal("div.about-datas > div.about-data:nth-child(1)", {
  delay: 700,
});
sr.reveal("div.about-datas > div.about-data:nth-child(3)", {
  delay: 800,
});
sr.reveal("div.about-datas > div.about-data:nth-child(5)", {
  delay: 900,
});
sr.reveal(".about-headlines", { origin: "left" });
sr.reveal(".about-img", { origin: "right" });

// Work Section
sr.reveal(".work h1");
sr.reveal(".work hr", { delay: 500 });


sr.reveal(".footer-callout");
sr.reveal(".newsletter", { origin: "left" });
sr.reveal(".footer-link", { origin: "right" });
sr.reveal(".socials");

// Pricing Page
sr.reveal(".basic-plan", { delay: 300 });
sr.reveal(".pro-plan", { delay: 500 });
sr.reveal(".premium-plan", { delay: 800 });

// Contact Page
sr.reveal(".gradient-blue");
sr.reveal(".contact h1");
sr.reveal(".contact p", { delay: 300 });
sr.reveal(".contact form input:nth-child(2)", { delay: 400 });
sr.reveal(".contact form input:nth-child(3)", { delay: 500 });
sr.reveal(".contact form input:nth-child(4)", { delay: 600 });
sr.reveal(".contact form textarea", { delay: 700 });
sr.reveal(".btn-callout", { delay: 200 });


// CAR IMAGINE 

// Selezione del contenitore e delle immagini principale e di hover
const carContainer = document.querySelector('.car-container');
const carImage = document.querySelector('.car-image');
const hoverImage = document.querySelector('.hover-image');

// Aggiunta dell'evento mouseover al contenitore
carContainer.addEventListener('mouseover', function() {
  // Mostra l'immagine di hover
  hoverImage.style.opacity = '1';
  hoverImage.style.visibility = 'visible';
});

// Aggiunta dell'evento mouseout al contenitore
carContainer.addEventListener('mouseout', function(event) {
  // Verifica se il mouse è ancora sopra l'immagine di hover
  const isHoveringHoverImage = event.relatedTarget === hoverImage || hoverImage.contains(event.relatedTarget);
  
  // Se il mouse non è sopra l'immagine di hover, nascondi l'immagine di hover
  if (!isHoveringHoverImage) {
    hoverImage.style.opacity = '0';
    hoverImage.style.visibility = 'hidden';
  }
});

//CAR IMAGINE END


