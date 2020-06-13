const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="sotp"]');

btnStart.addEventListener('click', fnStart);
btnStop.addEventListener('click', fnStop);

setInterval(function fnStart() { 
}, 1000)

function fnStop() {
  clearInterval();
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFromInterval(1, 6));