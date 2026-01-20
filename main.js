import { createProgress } from "./progressRing.js";
import { createProgressControls } from "./controls.js";

const progressRoot = document.querySelector('[data-component="progress-ring"]');
const controlsRoot = document.querySelector('[data-component="controls"]');

const progress = createProgress(progressRoot);
progress.setProgress(0);

const controls = createProgressControls(controlsRoot);

controls.onChange((value) => {
  progress.setProgress(value);
});

controls.onAnimateChecked((isAnimated) => {
  progress.animateProgress(isAnimated);
});

controls.onHideChecked((isHidden) => {
  progress.hideProgress(isHidden);
});
