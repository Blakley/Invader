let start_x = 60;
let start_y = 60;

/* spaceship enemy */
let enemy_spaceship = document.createElement("img");
let spaceship = {
    x: 200,
    y: 60,    
    h: 200,
    w: 200
};
enemy_spaceship.src = "../Invaders/Assets/spaceship.png";

/* create the type 1 enemy */
let enemy1a = document.createElement("img");
let enemy1b = document.createElement("img");
let enemy1 = {
    x: start_x,
    y: start_y,    
    h: 150,
    w: 175
}
enemy1a.src = "../Invaders/Assets/enemy1a.png";
enemy1b.src = "../Invaders/Assets/enemy1b.png";

/* create the type 2 enemy */
let enemy2a = document.createElement("img");
let enemy2b = document.createElement("img");
let enemy2 = {
    x: 200,
    y: 60,    
    h: 200,
    w: 200
}
enemy2a.src = "../Invaders/Assets/enemy2a.png";
enemy2b.src = "../Invaders/Assets/enemy2b.png";

/* create the type 3 enemy */
let enemy3a = document.createElement("img");
let enemy3b = document.createElement("img");
let enemy3 = {
    x: start_x,
    y: start_y,    
    h: 150,
    w: 175
}
enemy3a.src = "../Invaders/Assets/enemy3a.png";
enemy3b.src = "../Invaders/Assets/enemy3b.png";

let enemyList_a = []; // enemy state 1
let enemyList_b = []; // enemy state 2
function createEnemies() {
    // create the first row of enemies
    let enemy_obj = [];
    let row_1a = [];
    let row_1b = [];
    for (let i = 0; i < 1; i++) { // 11
        let e1_img = Object.create(enemy3a);
        let e2_img = Object.create(enemy3b);
        let e_obj = Object.create(enemy3);
        switch (i) {
            case 0:   
                e_obj.x = start_x;
                e_obj.y = start_y;
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;                
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;        
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
        }
        row_1a.push(e1);
        row_1b.push(e2);
    }
    enemyList_a.push(row_1a);
    enemyList_b.push(row_1b);
}


function drawEnemies() {
    context.drawImage(enemy3a, enemy3.x, enemy3.y, enemy3.w, enemy3.h);
}
