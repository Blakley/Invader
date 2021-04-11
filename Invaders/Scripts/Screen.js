/* Create the drawing variables */
let screen;
let context;
window.onload = init;

/* 
 * Setup the game drawing screen and settings
 */
function init() {
    screen = document.createElement("canvas");
    screen.id       = 'game'; 
    screen.width    = 1280;    
    screen.height   = 720;  
    context = screen.getContext('2d');
    document.getElementById("game_screen").appendChild(screen);
    $("#game_screen").show();
    window.requestAnimationFrame(loop); // first frame
}

/* 
 * Continually draw our game objects
 */
function loop() {
    context.clearRect(0, 0, screen.width, screen.height);
    drawLevel();
    drawLives();
    drawPlayer();
    drawEnemies();
    window.requestAnimationFrame(loop);
}

function pause() {
    /* Todo */
}