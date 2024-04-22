const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

// canvas.width = 1460;
// canvas.height = 1860; //surely this wont come back to haunt me UPDATE: LMAO IT ACTUALLY CAME BACK TO HAUNT ME

canvas.height = canvas.height;

let starsPerSecond = 50; 
let verticalDensityGradient = 0.85; 
let maxStars = 500; // Please do not crash browser
let totalStars = 0; 

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function drawStar(x, y, radius, color) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}

const stars = [];

function generateStar() {

  if (totalStars >= maxStars) {
    return; // exit if max stars reached
  }

  const x = randomRange(0, canvas.width);
  const y = randomRange(0, canvas.height);
  const radius = randomRange(1, 2);
  const alpha = randomRange(0.5, 1);

  // gradient logic
  const probability = Math.pow((1 - y / canvas.height), verticalDensityGradient);

  if (Math.random() < probability) {
    const color = `rgba(255, 255, 255, ${alpha})`;

    stars.push({ x, y, radius, color });
    totalStars++;
  }
}

// twinkling
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // calculate time between star generations based on stars per second
  const timeBetweenStars = 1000 / starsPerSecond;

  // generate a new star if enough time has passed
  if (Date.now() - lastStarTime > timeBetweenStars) {
    generateStar();
    lastStarTime = Date.now(); // update
  }

  // draw & update
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    drawStar(star.x, star.y, star.radius, star.color);

    // twinkle animation
    if (Math.random() < 0.05) {
      star.color = `rgba(255, 255, 255, ${randomRange(0.5, 1)})`;
    }

    // twinkle animation part 2 (changing opacity)
    star.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
  }

  // Please stop drawing off the damn screen
  stars.forEach((star, index) => {
    if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
      stars.splice(index, 1);
    }
  });

  // next
  requestAnimationFrame(animateStars);
}

// Start animation
let lastStarTime = Date.now(); // Initialize lastStarTime
animateStars();