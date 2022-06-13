const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.getElementById('hex-value');

function clickMe() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex = hex + hexValues[index];
  }
  value.textContent = hex;
  body.style.backgroundColor = hex;
}

btn.addEventListener('click', clickMe);
