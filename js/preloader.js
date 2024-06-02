const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.remove();
      window.addEventListener("scroll", handleAlert);
      handleAlert();
    }, 200);
  });
}
