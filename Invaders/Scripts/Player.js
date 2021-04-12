
/* cannon-player object */
let player_cannon = document.createElement("img");
player_cannon.src = "../Invaders/Assets/cannon.png";

let cannon = {
    h: 25,
    w: 40,
    x: 350,
    y: 495,
    speed: 5.0,
    lives: 3
};

/* Update the player's position */
function drawPlayer() {
    if (controller.left)
        cannon.x -= cannon.speed;
    if (controller.right)
        cannon.x += cannon.speed;

    debug(cannon);     // show game debugger
    context.drawImage(player_cannon, cannon.x, cannon.y, cannon.w, cannon.h);  // draw the player's new position
}

// cannon-life object & counter
let life = document.createElement("img");
life.src = "../Invaders/Assets/cannon.png";