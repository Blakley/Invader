
// spaceship enemy
let enemy_spaceship = document.createElement("img");
enemy_spaceship.src = "../Invaders/Assets/spaceship.png";
let spaceship = {
    x: 200,
    y: 60,    
    h: 200,
    w: 200
};

/* create the type 1 enemy */
let enemy1a = document.createElement("img");
let enemy1b = document.createElement("img");
enemy1a.src = "../Invaders/Assets/enemy1a.png";
enemy1b.src = "../Invaders/Assets/enemy1b.png";

/* create the type 2 enemy */
let enemy2a = document.createElement("img");
let enemy2b = document.createElement("img");
enemy2a.src = "../Invaders/Assets/enemy2a.png";
enemy2b.src = "../Invaders/Assets/enemy2b.png";

/* create the type 3 enemy */
let enemy3a = document.createElement("img");
let enemy3b = document.createElement("img");
enemy3a.src = "../Invaders/Assets/enemy3a.png";
enemy3b.src = "../Invaders/Assets/enemy3b.png";

// starting positions for the first enemy group
let start_x = 60;
let start_y = 60;

let enemy_obj = {
    x: start_x,
    y: start_y,    
    h: 150,
    w: 175
}

let enemy_count = 0;
let enemy_groups = [];

/* Returns a random value between two numbers */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* create the enemies */
function createEnemies(row) {
    let e_images = [];
    let e_objects = [];
    let e_group = []; // group of (images, objects)
    
    let x_spacing = 50;
    let y_spacing = 0;
    let enemy_type;

    // determine the initial row y position & enemy type
    switch (row) {
        case 5:
            y_spacing = start_y;
            enemy_type = enemy3a;
            break;
        case 4:
            y_spacing = start_y + 40;
            enemy_type = enemy2a;
            break;
        case 3:
            y_spacing = start_y + 80;
            enemy_type = enemy2a;
            break;
        case 2:
            y_spacing = start_y + 120;
            enemy_type = enemy1a;
            break;
        case 1:
            y_spacing = start_y + 160;
            enemy_type = enemy1a;
            break;
    }

    for (let i = 0; i < 11; i++) 
    {
        let e_img = enemy_type;
        let e_obj = Object.create(enemy_obj);

        e_obj.x = start_x;
        e_obj.y = y_spacing;
        
        // set initial enemy positions
        switch(i) {
            case 0:
                e_obj.x = start_x;
                e_obj.y = y_spacing;
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                e_obj.x += x_spacing;
                e_obj.y = y_spacing;
                break;                
        }

        if (i != 0)
            x_spacing += 50;    
   
        e_images.push(e_img);
        e_objects.push(e_obj);     
        enemy_count += 1;  
    } 

   e_group.push(e_images, e_objects);
   return e_group;
}

/* store the created enemies */
function initEnemies() {
    enemy_groups.push(createEnemies(5));
    enemy_groups.push(createEnemies(4));
    enemy_groups.push(createEnemies(3)); 
    enemy_groups.push(createEnemies(2));
    enemy_groups.push(createEnemies(1));
}

/* draw the enemies */
function drawEnemies() {
    for (let i = 0; i < enemy_groups.length; i++) 
    {
        let enemy_group = enemy_groups[i];
        let e_images = enemy_group[0];
        let e_objects = enemy_group[1];
    
        for (let i = 0; i < e_images.length; i++) {
            let curr_img = e_images[i];
            let curr_obj = e_objects[i];
            context.drawImage(curr_img, curr_obj.x, curr_obj.y, curr_obj.w, curr_obj.h);
        }
    }
}

/* selects a random enemy from the group */
function selectEnemy() {
    return;
}


/* handle enemy movement */
function moveEnemies() {
    for (let i = 0; i < enemy_groups.length; i++) 
    {
        let enemy_group = enemy_groups[i];
        let e_images = enemy_group[0];
        let e_objects = enemy_group[1];
    
        for (let i = 0; i < e_images.length; i++) {
            let curr_img = e_images[i];
            let curr_obj = e_objects[i];
            curr_obj.x += 5;
        }
    }
}


// call when game starts: 
initEnemies();