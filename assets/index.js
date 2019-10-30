import switchMode from "./js/switchMode.js";
import { startScroll, stopScroll } from "./js/autoscroll.js";

window.scrolldelay = false;
window.isScrolling = false;

window.onkeydown = e => {
  if (e.key == "s") {
    if (window.isScrolling) {
      stopScroll();
    } else {
      console.log(window);
      startScroll();
    }
  }
};

const swiperContainer = document.querySelector(".swiper-container");
const modeAttribute = swiperContainer.getAttribute("mode");
const defaultMode = modeAttribute ? modeAttribute : "slider";

switchMode({
  mode: defaultMode,
  swiperContainer
});

console.log(defaultMode);

// TODO: ADD BABEL
const btnElements = Array.from(document.getElementsByClassName("btn-mode"));

if (btnElements.length > 0) {
  btnElements.forEach(btn =>
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("mode");
      switchMode({
        mode,
        swiperContainer
      });
    })
  );
} else {
  console.err("no button elements");
}

// projects.forEach(buildProject);
// projects.forEach((obj, index) => buildHeader(obj.name, index));
