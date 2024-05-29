//move object while mouse is hovering
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".graphicObject").forEach((graphicObject) => {
    let moveValue = graphicObject.getAttribute("data-value");
    let x = (e.clientX * moveValue) / 200;
    let y = (e.clientY * moveValue) / 200;

    graphicObject.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
