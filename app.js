const indicator = document.getElementById("loading-row");
let width = 0;
let interval;

const startLoading = () => {
  interval = setInterval(() => {
    indicator.style.width = `${width}%`;
    indicator.innerHTML = width;

    if (width == 100) clearInterval(interval);

    width++;
  }, 50);
};
