const slides = [
  {
    title: "ABOUT",
    link: "about.html",
    bg: "images/IMG_9938.JPG"
  },
  {
    title: "WORKS",
    link: "works.html",
    bg: "images/home_works.png"
  },
  {
    title: "CONTACT",
    link: "contact.html",
    bg: "images/IMG_9371.JPG"
  }
];

let current = 0;
const slideContainer = document.getElementById("slide-container");

function renderSlide(index) {
  const slide = slides[index];
  slideContainer.innerHTML = `
    <div class="slide" style="background-image: url('${slide.bg}')" onclick="location.href='${slide.link}'">
      <div class="slide-title">${slide.title}</div>
    </div>
  `;
}

document.querySelector(".prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  renderSlide(current);
});

document.querySelector(".next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  renderSlide(current);
});

renderSlide(current);


