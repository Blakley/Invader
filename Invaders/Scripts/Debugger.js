/* debugger info */
let playerPos = document.createElement("p");
let screenDim = document.createElement("p");
let enemyCount = document.createElement("p");

playerPos.id = 'debugger';
screenDim.id = 'debugger';
enemyCount.id = 'debugger';

let debuggerDiv = document.getElementById("Debugger");
debuggerDiv.appendChild(screenDim);
debuggerDiv.appendChild(playerPos);
debuggerDiv.appendChild(enemyCount);

function debug(player) {
    screenDim.innerHTML = "Screen Dimension: (" + screen.width + "px, " + screen.height + "px)";
    playerPos.innerHTML = "Player Position: (x: " + player.x.toFixed(1) + ", y: " + player.y.toFixed(1) + ")";
    enemyCount.innerHTML = "Enemy Count: " + enemy_count;
}