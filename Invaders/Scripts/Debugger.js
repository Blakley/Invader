/* debugger info */
let playerPos = document.createElement("p");
let screenDim = document.createElement("p");

playerPos.id = 'debugger';
screenDim.id = 'debugger';

let debuggerDiv = document.getElementById("Debugger");
debuggerDiv.appendChild(screenDim);
debuggerDiv.appendChild(playerPos);

function debug(player) {
    screenDim.innerHTML = "Screen Dimension: (" + screen.width + "px, " + screen.height + "px)";
    playerPos.innerHTML = "Player Position: (x: " + player.x.toFixed(1) + ", y: " + player.y.toFixed(1) + ")";
}