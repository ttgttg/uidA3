// Get the navbar
let navbar = document.querySelector(".nav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", stickyNav);

//move object while mouse is hovering
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".graphicShape").forEach((graphicShape) => {
    let moveValue = graphicShape.getAttribute("data-value");
    let x = (e.clientX * moveValue) / 200;
    let y = (e.clientY * moveValue) / 200;

    graphicShape.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
