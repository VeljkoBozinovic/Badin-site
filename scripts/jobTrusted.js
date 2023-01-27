if (window.innerWidth > 768) {
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
}
