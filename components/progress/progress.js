import { progressTemplate } from "./progress-template.js";

export const createProgress = (rootElement) => {
  rootElement.innerHTML = progressTemplate;

  const progressValue = rootElement.querySelector(".progress-ring__value");
  const circumference = progressValue.getTotalLength();

  progressValue.style.strokeDasharray = `${circumference} ${circumference}`;
  progressValue.style.strokeDashoffset = circumference;

  let isAnimated = false;

  const setValue = (value) => {
    if (typeof value !== "number") return;
    if (isAnimated) return;

    const constrainedValue = Math.min(Math.max(value, 0), 100);

    if (constrainedValue === 0) {
      progressValue.style.strokeDashoffset = circumference;
      progressValue.style.strokeDasharray = `0 ${circumference}`;
      return;
    }

    if (constrainedValue === 100) {
      progressValue.style.strokeDasharray = `${circumference + 1} ${circumference}`;
      progressValue.style.strokeDashoffset = 0;
      return;
    }

    const offset = circumference - (constrainedValue / 100) * circumference;
    progressValue.style.strokeDasharray = `${circumference} ${circumference}`;
    progressValue.style.strokeDashoffset = offset;
  };

  const setHidden = (isHidden) => {
    rootElement.style.visibility = isHidden ? "hidden" : "visible";
  };

  const setAnimated = (isAnimated) => {
    isAnimated = isAnimated;
    rootElement.classList.toggle("is-animated", isAnimated);
  };

  return {
    setValue,
    setHidden,
    setAnimated,
  };
};
