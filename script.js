const background = document.getElementById("background");

// Number of circles
const circleCount = 12;

for (let i = 0; i < circleCount; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const size = 150 + Math.random() * 400;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.left = `${Math.random() * 100}%`;

    const hue = Math.random() * 360;
    circle.style.background = `radial-gradient(circle, hsl(${hue}, 70%, 60%), transparent 70%)`;

    circle.style.animationDuration = `${10 + Math.random() * 10}s`;
    circle.style.animationDelay = `${Math.random() * 5}s`;

    background.appendChild(circle);
}
