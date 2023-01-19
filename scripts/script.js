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
  let elDisplayedImage = document.getElementById("displayedImg");
  const elGalleryOverview = document.getElementsByClassName("gallery-overview");
  const elImages = document.getElementsByClassName("displayImg");
  const elArrows = document.getElementsByClassName("arrows");
  let currentImg;

  elGalleryOverview[0].addEventListener("click", () => {
    elGalleryOverview[0].style.cssText = "visibility: hidden;";
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

  for (let i = 0; i < elImages.length; i++) {
    elImages[i].addEventListener("click", () => {
      elDisplayedImage.setAttribute("src", elImages[i].getAttribute("src"));
      elGalleryOverview[0].style.cssText = "visibility: visible;";
      currentImg = i;
      hideArrows();
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
const elMobImages = document.querySelectorAll(".mobileImages");
let index = 0; //selected image
let j = 0; //margin

elMobArrows[0].addEventListener("click", () => {
  if (j < 0) {
    j += 90;
    index--;
    for (let i = 0; i < elMobImages.length; i++) {
      elMobImages[i].style.cssText =
        index === i ? "scale: 1.2; left:" + j + "px" : "left:" + j + "px;";
    }
  }
});

elMobArrows[1].addEventListener("click", () => {
  if (j > -360) {
    j -= 90;
    index++;
    for (let i = 0; i < elMobImages.length; i++) {
      elMobImages[i].style.cssText =
        index === i ? "scale: 1.2; left:" + j + "px" : "left:" + j + "px;";
    }
  }
});
