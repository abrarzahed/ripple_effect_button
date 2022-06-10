// INFO: for ripple hover button

const rippleButtonHover = document.querySelector(".ripple-button-hover");

const mouseMoveToCustomProps = function (event, element) {
  let possX = event.offsetX;
  let possY = event.offsetY;

  element.style.setProperty("--x", possX + "px");
  element.style.setProperty("--y", possY + "px");
  element.classList.add("active");
  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
};

rippleButtonHover.addEventListener("mousemove", function (e) {
  mouseMoveToCustomProps(e, this);
});
