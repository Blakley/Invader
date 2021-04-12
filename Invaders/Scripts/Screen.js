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
    screen.width    = 800;    
    screen.height   = 600;  
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
    drawLine();
    drawLives();
    drawPlayer();
    handleBounds();
    drawEnemies();
    window.requestAnimationFrame(loop);
}

/* 
 * Handle the pause menu functionality 
 */
function pause() {
    /* Todo */
}