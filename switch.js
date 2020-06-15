const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let interval;

refs.start.addEventListener('click', startChangeColors);
refs.stop.addEventListener('click', stopChangeColors);

function startChangeColors() {
    refs.start.removeEventListener('click', startChangeColors);
    interval = setInterval(changeColors, 1000);
  }

function changeColors() {
  const _colors = colors[randomIntegerFromInterval(0, colors.length - 1)];  
  refs.body.style.backgroundColor = _colors;
  console.log(_colors);
}

function stopChangeColors() {
  clearInterval(interval);
  refs.start.addEventListener('click', startChangeColors);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


