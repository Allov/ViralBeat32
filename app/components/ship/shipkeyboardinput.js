define([], function() {
   
    var keys = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        space: 32,
        F: 70,
        f: 102
    };
    
    var shoot = false,
        useShield = false,
        velocity = {x: 0, y: 0};
    
    var input = {
        update: function(entity) {
            input.enabled = entity.visible;
            if (shoot) {
                entity.shoot();
            }
           
            if (useShield) {
                entity.useShield();
                useShield = false;
            }
           
            entity.velocity.x = velocity.x * entity.speed;
            entity.velocity.y = velocity.y * entity.speed;
        },
        enabled: true
    };
   
    window.onkeyup = function(e) {
        if (!input.enabled) {
            return;
        }

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == keys.f || key == keys.F) {
            useShield = true;
        }

        if (key == keys.space) {
            shoot = true;
        }

        if (key == keys.up && velocity.y < 0) {
            velocity.y = 0;
        }

        if (key == keys.down && velocity.y > 0) {
            velocity.y = 0;
        }

        if (key == keys.left && velocity.x < 0) {
            velocity.x = 0;
        }

        if (key == keys.right && velocity.x > 0) {
            velocity.x = 0;
        }
    };

    window.onkeydown = function(e) {
        if (!input.enabled) {
            return;
        }

        var key = e.keyCode ? e.keyCode : e.which;

        if (key == keys.up) {
            velocity.y = -1;
        }

        if (key == keys.down) {
            velocity.y = 1;
        }

        if (key == keys.left) {
            velocity.x = -1;
        }

        if (key == keys.right) {
            velocity.x = 1;
        }
    };

    return input;
});