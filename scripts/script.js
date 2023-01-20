//Gallery animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elFloating = document.querySelectorAll(".float-top");
elFloating.forEach((el) => observer.observe(el));

//Gallery image preview
if (window.innerWidth > 768) {
  let elDisplayedImage = document.querySelector("#displayedImg");
  const elGalleryOverview = document.querySelectorAll(".gallery-overview");
  const elImages = document.querySelectorAll(".displayImg");
  const elArrows = document.querySelectorAll(".arrows");
  let currentImg;

  elGalleryOverview[0].addEventListener("click", () => {
    elGalleryOverview[0].style.cssText = "visibility: hidden;";
  });

  for (let i = 0; i < elImages.length; i++) {
    elImages[i].addEventListener("click", () => {
      elDisplayedImage.setAttribute("src", elImages[i].getAttribute("src"));
      elGalleryOverview[0].style.cssText = "visibility: visible;";
      currentImg = i;
      hideArrows();
    });
  }

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

  elArrows[0].addEventListener("click", (e) => {
    elDisplayedImage.setAttribute(
      "src",
      elImages[currentImg - 1].getAttribute("src")
    );
    currentImg -= 1;
    hideArrows();
    e.stopPropagation();
  });

  elArrows[1].addEventListener("click", (e) => {
    elDisplayedImage.setAttribute(
      "src",
      elImages[currentImg + 1].getAttribute("src")
    );
    currentImg += 1;
    hideArrows();
    e.stopPropagation();
  });
}

//Words
const elMobArrows = document.querySelectorAll(".mobileArrows");
const elMobImages = document.querySelectorAll(".words-tabs-images-item");
const elMobText = document.querySelectorAll(".words-tabs-item-card");
let imgIndex = 0;
let translateIndex = 0;

elMobArrows[0].addEventListener("click", () => {
  if (translateIndex < 0) {
    imgIndex--;
    translateIndex += 100;

    for (let i = 0; i < elMobImages.length; i++) {
      if (imgIndex === i) {
        elMobImages[i].style.cssText =
          "transform: translateX(" + translateIndex + "%);";
        elMobText[i].classList.add("visibleText");
        elMobText[i + 1].classList.remove("visibleText");
      } else {
        elMobImages[i].style.cssText =
          "transform: translateX(" + translateIndex + "%);";
      }
    }
  }
});

elMobArrows[1].addEventListener("click", () => {
  if (translateIndex > -400) {
    imgIndex++;
    translateIndex -= 100;

    for (let i = 0; i < elMobImages.length; i++) {
      if (imgIndex === i) {
        elMobImages[i].style.cssText =
          "transform: translateX(" + translateIndex + "%);";
        elMobText[i].classList.add("visibleText");
        elMobText[i - 1].classList.remove("visibleText");
      } else {
        elMobImages[i].style.cssText =
          "transform: translateX(" + translateIndex + "%);";
      }
    }
  }
});
