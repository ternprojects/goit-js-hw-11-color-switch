const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

let interval;

const setRandomColor = function () {
    const _color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(_color);
    document.body.style.backgroundColor = _color;
  };

refs.startBtn.addEventListener('click', (e) =>
  (interval = interval ? interval : setInterval(() => setRandomColor(), 1000))
);
refs.stopBtn.addEventListener("click", (e) => clearInterval(interval));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
