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

  if (imgIndex === 0) {
    elMobArrows[0].style.background = "#888";
  }
  elMobArrows[1].style.background = "#317ade";
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

  if (imgIndex === 4) {
    elMobArrows[1].style.background = "#888";
  }
  elMobArrows[0].style.background = "#317ade";
});

for (let i = 0; i < elMobImages.length; i++) {
  elMobImages[i].addEventListener("click", () => {
    imgIndex = i;
    translateIndex = -(imgIndex * 100);

    for (let j = 0; j < elMobImages.length; j++) {
      elMobImages[
        j
      ].style.cssText = `transform: translateX(${translateIndex}%);`;

      if (imgIndex === j) {
        elMobText[j].classList.add("visibleText");
      } else {
        elMobText[j].classList.remove("visibleText");
      }
    }

    if (imgIndex === 4) {
      elMobArrows[1].style.background = "#888";
    }
    elMobArrows[0].style.background = "#317ade";
  });
}
