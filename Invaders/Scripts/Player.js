
/* cannon-player object */
let player_cannon = document.createElement("img");
player_cannon.src = "../Invaders/Assets/cannon.png";

let cannon = {
    h: 40,
    w: 70,
    x: 600,
    y: 600,
    speed: 5.5,
    lives: 3
};

/* Update the player's position */
function drawPlayer() 
{
    if (controller.left) {
        cannon.x -= cannon.speed;
    }
    if (controller.right) {
        cannon.x += cannon.speed;
    }

    // draw the player's new position
    context.drawImage(player_cannon, cannon.x, cannon.y, cannon.w, cannon.h);
}

// cannon-life object & counter
let life = document.createElement("img");
life.src = "../Invaders/Assets/cannon.png";

/* Update the amount of remaining lives */
function drawLives() {
    switch (cannon.lives) {
        case 3:
            context.drawImage(life, 125, 665, cannon.w-20, cannon.h-10);
            context.drawImage(life, 225, 665, cannon.w-20, cannon.h-10);
            context.drawImage(life, 325, 665, cannon.w-20, cannon.h-10);
            break;
        case 2:
            context.drawImage(life, 125, 665, cannon.w-20, cannon.h-10);
            context.drawImage(life, 225, 665, cannon.w-20, cannon.h-10);
            break;
        case 1:
            context.drawImage(life, 125, 665, cannon.w-20, cannon.h-10);
            break;
    }
}
