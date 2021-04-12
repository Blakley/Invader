
// game position bounds
let border_l = -0.5;     // left
let border_r = 761.0;    // right

/* Handle all level related functionalities */
function drawLevel() {
    // Draw the horizontal in-game line
    context.beginPath();
    context.moveTo(0, screen.height-70);
    context.lineTo(screen.width, screen.height-70);
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.stroke();

    // Draw the game bunkers 

    // Handle the canvas-x bounds for the player
    if (cannon.x <= border_l+1)
        cannon.x = border_l;
    if (cannon.x >= border_r-3)
        cannon.x = border_r;
}

