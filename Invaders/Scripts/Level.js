
/*  Draw the game line */
function drawLine() {

    // Draw the horizontal in-game line
    context.beginPath();
    context.moveTo(0, screen.height-70);
    context.lineTo(screen.width, screen.height-70);
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.stroke();
}

/* Draw the game bunkers */
function drawBunkers() {
}

/* Handle the canvas-x bounds for the player */
let border_l = -0.5;
let border_r = 761.0;
function handleBounds() {
    if (cannon.x <= border_l+1)
        cannon.x = border_l;
    if (cannon.x >= border_r-3)
        cannon.x = border_r;
}

// 
createEnemies();