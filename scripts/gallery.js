const observerGallery = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      for (let i = 0; i < elGalleryVisible.length; i++) {
        elGalleryVisible[i].classList.toggle("show", entry.isIntersecting);
      }
    });
  },
  { rootMargin: "50px" }
);

const elGalleryVisible = document.querySelectorAll(".float-top");
const elFloating = document.querySelectorAll(".gallery-visible");
elFloating.forEach((picture) => observerGallery.observe(picture));

let elDisplayedImage = document.querySelector("#displayedImg");
const elGalleryOverview = document.querySelectorAll(".gallery-overview");
const elImages = document.querySelectorAll(".displayImg");
const elArrows = document.querySelectorAll(".arrows");
let currentImg;

elGalleryOverview[0].addEventListener("click", hideGalleryOverview);

function hideGalleryOverview() {
  elGalleryOverview[0].style.cssText = "visibility: hidden;";
}

for (let i = 0; i < elImages.length; i++) {
  elImages[i].addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      elDisplayedImage.setAttribute("src", elImages[i].getAttribute("src"));
      elGalleryOverview[0].style.cssText = "visibility: visible;";
      currentImg = i;
      hideArrows();
    }
  });
}

elArrows[0].addEventListener("click", (e) => {
  elDisplayedImage.setAttribute(
    "src",
    elImages[currentImg - 1].getAttribute("src")
  );
  currentImg -= 1;
  hideArrows();
  e.stopPropagation();
});

function hideArrows() {
  if (currentImg === 0) {
    elArrows[0].style.cssText = "visibility: hidden;";
    elArrows[1].style.cssText = "visibility: inherit;";
  } else if (currentImg === 5) {
    elArrows[0].style.cssText = "visibility: inherit;";
    elArrows[1].style.cssText = "visibility: hidden;";
  } else {
    elArrows[0].style.cssText = "visibility: inherit;";
    elArrows[1].style.cssText = "visibility: inherit;";
  }
}

elArrows[1].addEventListener("click", (e) => {
  elDisplayedImage.setAttribute(
    "src",
    elImages[currentImg + 1].getAttribute("src")
  );
  currentImg += 1;
  hideArrows();
  e.stopPropagation();
});
