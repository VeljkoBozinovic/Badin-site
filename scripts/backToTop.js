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
