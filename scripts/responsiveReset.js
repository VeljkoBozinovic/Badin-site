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
