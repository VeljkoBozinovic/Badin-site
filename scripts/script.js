//Menu
let elWrapper = document.querySelector(".wrapper ");
let elMenu = document.querySelector(".menu");
let elNav = document.querySelector(".nav-closed");
let elClose = document.querySelector("#close-menu");

elMenu.onmouseover = function () {
  elWrapper.classList.add("menu-hovered");
};

elMenu.onmouseout = function () {
  elWrapper.classList.remove("menu-hovered");
};

elMenu.addEventListener("click", () => {
  elWrapper.classList.add("wrapperOpened");
  elNav.classList.add("nav");
  elNav.classList.remove("nav-closed");
});

elClose.addEventListener("click", () => {
  elWrapper.classList.remove("wrapperOpened");
  elNav.classList.remove("nav");
  elNav.classList.add("nav-closed");
});

const elHeader = document.querySelector("#header");
const elExpertise = document.querySelector("#expertise");

addEventListener("DOMContentLoaded", () => {
  const observerMenu = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        elMenu.classList.toggle("changeColor", entry.isIntersecting);
      });
    },
    { rootMargin: "-50%" }
  );

  observerMenu.observe(elExpertise);
  observerMenu.observe(elHeader);
});

//Gallery animation
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

//Gallery image preview

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
//Job trusted
let arrayElJobTrusted = Array.from(
  document.querySelectorAll(".job_trusted-images-item")
);
let currentlyDisplayedImages = [];
let nodeList;

let el = document.querySelector(".job_trusted-images");

selectFive();

function selectFive() {
  currentlyDisplayedImages = arrayElJobTrusted.splice(0, 5);
  for (let i = 0; i < currentlyDisplayedImages.length; i++) {
    currentlyDisplayedImages[i].classList.add("currently-displayed-images");
  }
}

setInterval(() => {
  arrayElJobTrusted.push.apply(arrayElJobTrusted, currentlyDisplayedImages);

  for (let i = arrayElJobTrusted.length - 1; i > 5; i--) {
    arrayElJobTrusted[i].classList.remove("currently-displayed-images");
  }

  el.innerHTML = null;
  nodeList = [...arrayElJobTrusted];

  for (let i = 0; i < nodeList.length; i++) {
    el.appendChild(nodeList[i]);
  }

  selectFive();
}, 5000);

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
      elMobImages[
        i
      ].style.cssText = `transform: translateX(${translateIndex}%);`;

      if (imgIndex === i) {
        elMobText[i].classList.add("visibleText");
        elMobText[i + 1].classList.remove("visibleText");
      }
    }
  }
});

elMobArrows[1].addEventListener("click", () => {
  if (translateIndex > -400) {
    imgIndex++;
    translateIndex -= 100;

    for (let i = 0; i < elMobImages.length; i++) {
      elMobImages[
        i
      ].style.cssText = `transform: translateX(${translateIndex}%);`;

      if (imgIndex === i) {
        elMobText[i].classList.add("visibleText");
        elMobText[i - 1].classList.remove("visibleText");
      }
    }
  }
});

//Back to top
let backToTopBtn = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 50) {
    backToTopBtn.style.opacity = 1;
  } else {
    backToTopBtn.style.opacity = 0;
  }

  let currentLenght =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollCurrentY = Math.round(
    (document.documentElement.scrollTop * 100) / currentLenght
  );

  backToTopBtn.style.background = `conic-gradient(#fff ${scrollCurrentY}%, #888 ${scrollCurrentY}%)`;
};

function scrollFunction() {}

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//responsiveReset
window.addEventListener("resize", () => {
  //galleryReset
  hideGalleryOverview();
  elDisplayedImage.setAttribute("src", "");
  //wordsReset
  imgIndex = 0;
  translateIndex = 0;
  for (let i = 0; i < elMobImages.length; i++) {
    elMobImages[i].style.cssText = "transform: translateX(0);";
    elMobText[i].classList.remove("visibleText");
  }
  elMobText[0].classList.add("visibleText");
});
