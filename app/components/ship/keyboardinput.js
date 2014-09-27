define([], function() {
   
    var keys = {
        up: [38],
        down: [40],
        left: [37],
        right: [39],
        shoot: [68, 100],
        shield: [70, 102]
    };
    
    var shoot = false,
        useShield = false,
        lastShoot = Date.now(),
        velocity = {x: 0, y: 0};
    
    var input = {
        update: function(entity, elapsed) {
            input.enabled = entity.visible;
            
            var current = Date.now();
            
            if (shoot && current - lastShoot > 200) {
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
   
    window.onkeyup = function(e) {
        if (!input.enabled) {
            return;
        }

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == keys.shield[0] || key == keys.shield[1]) {
            useShield = true;
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