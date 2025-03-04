
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const left = parseInt(dodger.style.left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const left = parseInt(dodger.style.left, 10);

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
