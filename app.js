const progress = document.getElementById('progress');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCirclesCount = 1;

nextButton.addEventListener('click', () => {
  if (activeCirclesCount < circles.length) {
    activeCirclesCount++;
  }

  update();
})

previousButton.addEventListener('click', () => {
  if (activeCirclesCount > 1) {
    activeCirclesCount--;
  }

  update();
})

const update = () => {
  circles.forEach((circle, index) => {
    if (index < activeCirclesCount) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const activeCircles = document.querySelectorAll('.active');

  progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%';

  disableButtons();
}

const disableButtons = () => {
  if (activeCirclesCount === 1) {
    previousButton.disabled = true;
  } else if (activeCirclesCount === circles.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
}