import { createProgress } from "./components/progress/progress.js";
import { createProgressControls } from "./components/controls/controls.js";

const progressRoot = document.querySelector('[data-component="progress-ring"]');
const controlsRoot = document.querySelector('[data-component="controls"]');

const progress = createProgress(progressRoot);
progress.setValue(0);

const controls = createProgressControls(controlsRoot);

controls.onChange((value) => {
  progress.setValue(value);
});

controls.onAnimateChange((isAnimated) => {
  progress.setAnimated(isAnimated);
  controls.setDisabled(isAnimated);
});

controls.onHideChange((isHidden) => {
  progress.setHidden(isHidden);
});
