
let controller = {
    left: false,
    right: false,
    up: false,
    pause: false,
    menu: false,
    keyListener: function(event) {
        let state;
        if (event.type == "keydown")                       
            state = true;
        else
            state = false;

        switch(event.keyCode) {                 
            case 65:    
                if (controller.menu == false) {
                    controller.left = state;   
                    console.log('moving left');
                }
                break;
            case 68: 
                if (controller.menu == false) {
                    controller.right = state;
                    console.log('moving right');
                }
                break; 
        }
    }
};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
