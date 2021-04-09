/* Test player object types */
let player = {
    x: 625,
    y: 625,
    r: 15,
    speed: 5.0,
    color: 'blue',
    lives: 3
};

/* Update the test player's position */
function updatePlayer() 
{
    if (controller.left) {
        player.x -= player.speed;
    }
    if (controller.right) {
        player.x += player.speed;
    }

    // draw the player's new position
    context.beginPath();
    context.arc(player.x, player.y, player.r, 0, 2 * Math.PI);
    context.strokeStyle = player.color;
    context.stroke();
    context.fillStyle = player.color;
    context.fill();
}
