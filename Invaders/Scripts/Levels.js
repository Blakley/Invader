
/* Draw the player */
function drawPlayer() {
    
}

/* Draw the horizontal in-game line */
function drawLine() {
    context.beginPath();
    context.moveTo(0, screen.height-70);
    context.lineTo(screen.width, screen.height-70);
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.stroke();
}