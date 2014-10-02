define(["virality"], function(v) {
   
    var keys = {
        up: [38],
        down: [40],
        left: [37],
        right: [39],
        shoot: ["d".charCodeAt(), "D".charCodeAt()],
        shield: ["f".charCodeAt(), "F".charCodeAt()],
        debug: ["P".charCodeAt()]
    };

    var buttons = {
        up: [12],
        down: [13],
        left: [14],
        right: [15],
        shoot: [0]
    };

    var movement = {
        up: false,
        down: false,
        left: false,
        right: false,
        shoot: false
    };
    
    var shoot = false,
        useShield = false,
        lastShoot = Date.now(),
        velocity = {x: 0, y: 0};
    
    var input = {
        update: function(entity, elapsed) {
            input.enabled = entity.visible;

            evaluateGamepad();

            var current = Date.now();
            
            if (shoot && current - lastShoot > 200) {
                lastShoot = current;
                entity.shoot();
                shoot = false;
            } else {
                shoot = false;
            }
           
            if (useShield) {
                //entity.useShield();
                useShield = false;
            }
           
            entity.velocity.x = velocity.x * entity.speed;
            entity.velocity.y = velocity.y * entity.speed;
            
            entity.position.x += entity.velocity.x * elapsed;
            entity.position.y += entity.velocity.y * elapsed;
        },
        enabled: true
    };

    function evaluateGamepad() {
        gamepad = navigator.getGamepads()[0];

        if (!gamepad) {
            return;
        }

        velocity.x = 0;
        velocity.y = 0;

        if (gamepad.buttons[buttons.shoot[0]].pressed) {
            shoot = true;
        } else {
            shoot = false;
        }

        if (gamepad.buttons[buttons.up[0]].pressed) {
            velocity.y = -1;
        }

        if (gamepad.buttons[buttons.down[0]].pressed) {
            velocity.y = 1;
        }
        if (gamepad.buttons[buttons.left[0]].pressed) {
            velocity.x = -1;
        }

        if (gamepad.buttons[buttons.right[0]].pressed) {
            velocity.x = 1;
        }
    }
   
    window.onkeyup = function(e) {
        if (!input.enabled) {
            return;
        }

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == keys.shield[0] || key == keys.shield[1]) {
            useShield = true;
        }
        
        if (key == keys.debug[0]) {
            v.toggleDebug();
        }

        if (key == keys.up[0] && velocity.y < 0) {
            velocity.y = 0;
        }

        if (key == keys.down[0] && velocity.y > 0) {
            velocity.y = 0;
        }

        if (key == keys.left[0] && velocity.x < 0) {
            velocity.x = 0;
        }

        if (key == keys.right[0] && velocity.x > 0) {
            velocity.x = 0;
        }
    };

    window.onkeydown = function(e) {
        if (!input.enabled) {
            return;
        }

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == keys.shoot[0] || key == keys.shoot[1]) {
            shoot = true;
        }

        if (key == keys.up[0]) {
            velocity.y = -1;
        }

        if (key == keys.down[0]) {
            velocity.y = 1;
        }

        if (key == keys.left[0]) {
            velocity.x = -1;
        }

        if (key == keys.right[0]) {
            velocity.x = 1;
        }
    };

    return input;
});