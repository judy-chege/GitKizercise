// Function to update the time
function updateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Run the clock every second
setInterval(updateTime, 1000);
updateTime();

// Function to change the neon glow color when the button is clicked
document.getElementById('color-btn').addEventListener('click', function() {
    const colors = ['#00ffcc', '#ff00ff', '#00ccff', '#ffcc00', '#ff3366'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const clock = document.getElementById('clock');
    clock.style.color = randomColor;
    clock.style.textShadow = `0 0 20px ${randomColor}`;
});