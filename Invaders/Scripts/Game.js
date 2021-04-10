/* Create the drawing variables */

let screen = document.createElement("canvas");
let context = screen.getContext('2d');
let frame;

/* 
 * Description: Setup the game drawing screen and settings
 * screen: our html canvas element var
 */
function initialize(screen) {
    $("#game_screen").show();
    screen.id       = 'game'; 
    screen.width    = 1280;    
    screen.height   = 720;  
    document.getElementById("game_screen").appendChild(screen);
    loop();
}

/* 
 *
 */
function loop() {
    context.clearRect(0, 0, screen.width, screen.height);

    // tests
    drawLevel();
    drawPlayer();

    frame = window.requestAnimationFrame(loop);
}

function pause() {
    /* Todo */
}

initialize(screen);