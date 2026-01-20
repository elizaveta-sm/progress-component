export const createProgressControls = (rootElement) => {
  const percentInput = rootElement.querySelector(".controls__percent-input");
  const animateCheckbox = rootElement.querySelector("#progress-animate");
  const hideCheckbox = rootElement.querySelector("#progress-hide");

  return {
    onChange: (handler) => {
      percentInput.addEventListener("input", (e) => {
        let value = Number(e.target.value);

        if (isNaN(value)) {
          value = 0;
        }

        value = Math.min(Math.max(value, 0), 100);
        e.target.value = value;

        handler(value);
      });
    },

    onAnimateChecked: (handler) => {
      animateCheckbox.addEventListener("change", (e) => {
        handler(e.target.checked);
      });
    },

    onHideChecked: (handler) => {
      hideCheckbox.addEventListener("change", (e) => {
        handler(e.target.checked);
      });
    },
  };
};
