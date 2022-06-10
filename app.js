const rippleButton = document.querySelector(".ripple-button");

const mouseMoveToCustomProps = function (event, element) {
  let possX = event.offsetX;
  let possY = event.offsetY;

  element.style.setProperty("--x", possX + "px");
  element.style.setProperty("--y", possY + "px");
  element.classList.add("active");
  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
  //   element.style.transform = `translate(-50%, -50%) scale(1)`;
};

rippleButton.addEventListener("mousemove", (e) => {
  mouseMoveToCustomProps(e, rippleButton);
});
