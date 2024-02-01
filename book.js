// JavaScript source code
const canvas = document.getElementById('spine-canvas');
const ctx = canvas.getContext('2d');
const widthInput = document.getElementById('spine-width');

function drawSpine() {
  const width = widthInput.value * 10; // Multiply the user input by a constant
  const height = 200; // Set the height of the spine
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

widthInput.addEventListener('input', drawSpine);

drawSpine();